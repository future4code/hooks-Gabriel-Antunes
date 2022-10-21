import {v4 as idGen} from 'uuid'
import { connection } from '../data/connection'
import {Request,Response} from 'express'
import { product } from '../types'

const createProduct = async(req:Request, res:Response)=>{
    let statusCode = 500
    try{
        const name = (req.body.name as string).toLowerCase()
        const price = Number(req.body.price)
        const imageUrl = req.body.image_url as string
       
        if(!name || !price || !imageUrl){
            statusCode = 422
            throw new Error('É necessario informar nome, preço e url de uma imagem para cadastrar um novo produto.')  
        }
        
        if(isNaN(price)){
            statusCode = 406
            throw new Error('O preço deve conter apenas números.')
        }

        const checkName = await connection('labecommerce_products').select().where({name})
        if(checkName.length > 0){
            statusCode = 409
            throw new Error('O nome do produto já está cadastrado.')
        }

        const newProduct:product = {
            name,
            price,
            image_url:imageUrl,
            id:idGen()
        }
        
        await connection('labecommerce_products').insert(newProduct)

        statusCode = 201

        res.status(statusCode).send('Produto criado com sucesso.')
      
    }catch(error:any){
        res.status(statusCode).send(error.message)
    }
}
export default createProduct