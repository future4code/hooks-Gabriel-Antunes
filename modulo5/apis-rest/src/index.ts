import express,{Request,Response} from 'express'
import cors from 'cors'
import {users,user, Type} from './data'

const app = express()
app.use(express.json())
app.use(cors())

let dinamicUsers:user[] = users



// 1.a) método GET 2.b) a entidade é users
app.get('/users',(req:Request,res:Response)=>{
    let statusCode:number = 500
    try{
        statusCode = 200
        res.status(statusCode).send(dinamicUsers)
    }catch(error:any){
        res.status(statusCode).send(error.message)
    }
    
})

app.get('/users/search',(req:Request,res:Response)=>{
    let statusCode:number = 500
    try{
        const name:string = req.query.name as string
        const findName = dinamicUsers.find((user)=>user.name === name)

        if(!name){
            statusCode = 422
            throw new Error('Informar parâmetro para pesquisa.')
        }
        if(!findName){
            statusCode = 404
            throw new Error('Usuário não encontrado.')
        }
        statusCode = 200
        res.status(statusCode).send(dinamicUsers.filter((user)=>user.name === name))

    }catch(error:any){
        res.status(statusCode).send(error.message)
    } 
})

//2.a) passei por params por ser um filtro. Para garantir os types válidos, coloquei o 'if' da linha 15.
app.get('/users/:type',(req:Request,res:Response)=>{
    let statusCode:number = 500
    try{
        const type:string | undefined = (req.params.type as string).toUpperCase()
    
        if(type !== Type.ADMIN && type !== Type.NORMAL){
            statusCode = 404
            throw new Error('Informar um type de usuário correto.')
        }
        statusCode = 200
        res.status(statusCode).send(dinamicUsers.filter((user)=>user.type === type.toUpperCase()))
    }catch(error:any){
        res.status(statusCode).send(error.message)
    }


})
//4 o método PUT funciona perfeitamente, porém é correto usar o POST por se tratar da criação de um novo item.
app.post('/users',(req:Request,res:Response)=>{
    let statusCode:number = 500
    try{
        const {id,name,email,type,age} = req.body

    if(!id || !name || !email ||!type ||!age){
        statusCode=422
        res.status(statusCode).send('É necessário fornecer todas as informações do usuário')
    }
    if(type.toUpperCase() !== Type.ADMIN && type.toUpperCase() !== Type.NORMAL){
        statusCode = 404
        throw new Error('Informar um type de usuário correto.')
    }
    const newUser:user={
        id,
        name,
        email,
        type:type.toUpperCase(),
        age
    }
    dinamicUsers.push(newUser)
    statusCode=201
    res.status(statusCode).send('Usuário criado com sucesso!')

    }catch(error:any){
        res.status(statusCode).send(error.message)
    }
}) 

app.put('/users/:id',(req:Request,res:Response)=>{
    let statusCode:number=500
    try{
        const id:number = Number(req.params.id)
        const newName:string = `${req.body.name} --ALTERADO`
        const findId = dinamicUsers.find((user)=>user.id === id)

        if(isNaN(id)){
            statusCode = 406
            throw new Error('O id do usuário deve ser um número.')
        }
        if(!findId){
            statusCode = 404
            throw new Error('O id informado não foi encontrado na base de dados.')
        }
        if(!newName){
            statusCode = 404
            throw new Error('É necessário informar o novo nome do usuário.')
        }
        dinamicUsers = dinamicUsers.map((user)=>{
            if(user.id === id){
                user.name = newName
                return user
            }else{
                return user
            }
        })
    }catch(error:any){
        res.status(statusCode).send(error.message)
    }
})






app.listen(3003,()=>console.log('The server is running in http://localhost:3003'))