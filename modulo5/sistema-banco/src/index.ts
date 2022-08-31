import { data,user, transactions } from "./data"
import express,{Request,Response} from "express"
import cors from "cors"

const app = express()
app.use(express.json())
app.use(cors())

let dinamicData = data
const today = new Date(Date.now()).toLocaleDateString()

app.post('/users',(req:Request,res:Response)=>{
    let statusCode:number = 500
    try{
        const {cpf,name,birthDate} = req.body
        const age = (new Date(Date.now()).getFullYear()) - (new Date(birthDate).getFullYear())
        const findCpf = dinamicData.find((account)=>account.cpf === cpf)
        if(!cpf || !name || !birthDate){
            statusCode = 422
            throw new Error('É necessário informar cpf, nome e data de nascimento do novo cliente.')
        }
        if(isNaN(cpf)){
            statusCode = 422
            throw new Error('Informar apenas os números do cpf.')
        }
        if(cpf.length !== 11){
            statusCode = 406
            throw new Error('O cpf deve conter 11 dígitos.')
        }
        if(age <18){
            statusCode = 412
            throw new Error('O usuário deve ter no mínimo 18 anos para criar uma conta.')
        }
        if(findCpf){
            statusCode = 409
            throw new Error('O cpf informado já está cadastrado no sistema.')
        }

        const newUser:user={
            cpf,
            name,
            birthDate,
            balance:0,
            statement:[]
        }
        dinamicData = [...dinamicData,newUser]
        statusCode = 201
        res.status(statusCode).send('Usuário criado com sucesso!')
    }catch(error:any){
        res.status(statusCode).send(error.message)
    }
})

app.get('/users',(req:Request,res:Response)=>{
    let statusCode = 500
    try{
        statusCode = 200
        res.status(statusCode).send(dinamicData)
    }catch(error:any){
        res.status(statusCode).send('Algo inesperado aconteceu em sua solicitação.')
    }
})

app.get('/users/:cpf/balance',(req:Request,res:Response)=>{
    let statusCode = 500
    try{
        const cpf = req.params.cpf
        const findUser = dinamicData.find((user)=>user.cpf === Number(cpf))

        if(isNaN(Number(cpf))){
            statusCode = 422
            throw new Error('Deve ser informado apenas números na parâmtro cpf')
        }
        if(cpf.length !== 11){
            statusCode = 406
            throw new Error('O cpf deve conter 11 dígitos.')
        }
        if(!findUser){
            statusCode = 404
            throw new Error('Usuário não encontrado.')
        }
        const balance = {"balance":findUser.balance}
        statusCode = 200
        res.status(statusCode).send(balance)
        
    }catch(error:any){
        res.status(statusCode).send(error.message)
    }
})

app.put('/users/:cpf/deposit',(req:Request,res:Response)=>{
    let statusCode = 500
    try{
        const name:string = (req.body.name as string).toLocaleLowerCase()
        const cpf:string  = req.params.cpf
        const findUser:user | undefined = dinamicData.find((user)=>user.cpf === Number(cpf))
        const depositValue:number = Number(req.body.depositValue)
        if(isNaN(Number(cpf))){
            statusCode = 422
            throw new Error('Deve ser informado apenas números na parâmtro cpf')
        }
        if(cpf.length !== 11){
            statusCode = 406
            throw new Error('O cpf deve conter 11 dígitos.')
        }
        if(!findUser){
            statusCode = 404
            throw new Error('Usuário não encontrado.')
        }
        if(!depositValue){
            statusCode = 422
            throw new Error('É necessário informar o valor do depósito')
        }
        if(isNaN(depositValue)){
            statusCode = 422
            throw new Error('O valor do depósito deve conter apenas números.')
        }
        if(depositValue <=0){
            statusCode = 400
            throw new Error('O valor do depósito deve ser maior que 0.')
        }
        const testName = name === findUser.name
        
        if(!testName){
            statusCode = 400
            throw new Error('As informações "nome" e "cpf" não coicidem com o banco de dados.')
        }
        const newTransaction:transactions={
            value:depositValue,
            date:new Date(Date.now()).toLocaleDateString(),
            description:"Depósito em dinheiro."
        }

        dinamicData = dinamicData.map((user)=>{
            if(user.cpf === Number(cpf)){
                user.statement.push(newTransaction)
                user.balance = user.balance + depositValue
                return user
            }else{
                return user
            }
        })

        statusCode = 200
        res.status(statusCode).send('Depósito realizado com sucesso!')


    }catch(error:any){
        res.status(statusCode).send(error.message)
    }
})

app.post('/users/:id/bills',(req:Request,res:Response)=>{
    let statusCode:number = 500
    try{
        const cpf:string  = req.params.cpf
        const findUser:user | undefined = dinamicData.find((user)=>user.cpf === Number(cpf))
        let {value,date,description} = req.body
        if(isNaN(Number(cpf))){
            statusCode = 422
            throw new Error('Deve ser informado apenas números na parâmtro cpf')
        }
        if(cpf.length !== 11){
            statusCode = 406
            throw new Error('O cpf deve conter 11 dígitos.')
        }
        if(!findUser){
            statusCode = 404
            throw new Error('Usuário não encontrado.')
        }
        if(!value || !description){
            statusCode = 422
            throw new Error('É obrigatório informar o valor e a descrição da conta.')
        }
        if()
        if(!date){
            date = new Date(Date.now()).toLocaleDateString()
        }

        const bill:transactions={
            value,
            date,
            description
        }
        
    }catch(error:any){
        res.status(statusCode).send(error.message)
    }
})



app.listen(3003,()=>console.log('The server is running in http://localhost:3003'))