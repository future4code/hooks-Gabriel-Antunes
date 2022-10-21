import {v4 as idGen} from 'uuid'
import { connection } from '../data/connection'
import {Request,Response} from 'express'
import transporter from '../services/mailTransporter'
import { user } from '../types'

const createUser = async (req:Request,res:Response):Promise<void> =>{
    let statusCode:number = 500

    try{
       const name = (req.body.name as string).toLowerCase()
       const email = (req.body.email as string).toLowerCase()
       const password = (req.body.password as string).toLowerCase()

        if(!name || !email || !password){
            statusCode = 422
            throw new Error('É necessario informar nome, email e senha do novo usuario.')
        }
        const checkName = await connection('labecommerce_users')
        .where({name})

        const checkEmail = await connection('labecommerce_users')
        .where({email})

        if(checkName.length > 0){
            statusCode = 409
            throw new Error('O Nome de usuário já existe.')
        }
        if(checkEmail.length > 0){
            statusCode = 409
            throw new Error('O email já está cadastrado.')
        }
        const newUser:user = {
            name,
            email,
            password,
            id: idGen()
        }

        await connection('labecommerce_users').insert(newUser)

        transporter.sendMail({
            from: process.env.NODEMAILER_USER,
            to: email, 
            subject: "Criação da conta!",
            text: "Parabéns, conta criada com sucesso",
            html: `<p>Parabéns ${name}, sua conta foi criada com sucesso ❤️</p>`
         })
         
        statusCode = 201

        res.status(statusCode).send('Usuário criado com sucesso.')

    }catch(error:any){
        res.status(statusCode).send(error.message)
    }
}

export default createUser

