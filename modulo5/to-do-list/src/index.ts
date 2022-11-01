import express, {Request, Response} from 'express'
import cors from 'cors'
import connection from './data/connection'
import { User } from './types/types'
import { v4 as idGen } from 'uuid'

const app = express()
app.use(express.json())
app.use(cors())

//tests
app.get('/user',async (req:Request,res:Response)=>{
    try{
        const result = await connection('Tasks').select()
        res.send(result)
        
        res.send(result[0])
    }catch(error:any){
        res.send(error.message)
    }
})

//create user
app.post('/user',async(req:Request,res:Response)=>{
    let statusCode:number = 500
    try{
        const {name,nickname,email} = req.body
        if(!name || !nickname || !email ){
            statusCode = 422
            throw new Error('É necessário informar "nome", "nickname" e "email" do usuário!')
        }
        const newUser:User = {
            name,
            nickname,
            email
        }

        await connection("Users").insert(newUser)
        statusCode = 201
        res.status(statusCode).send('Usuário criado com sucesso')

    }catch(error:any){
        res.status(statusCode).send(error.message)
    }
})

//get all users
app.get('/user/all',async(req:Request,res:Response)=>{
    let statusCode = 500
    try{
        const usersData = await connection('Users').select()

        res.send(usersData)
    }catch(error:any){
        res.status(statusCode).send(error.message)
    }
})

//get user by id
app.get('/user/:id',async(req:Request,res:Response)=>{
    let statusCode = 500
    try{
        const userId = Number(req.params.id)

        if(isNaN(userId)){
            statusCode = 406
            throw new Error('O id deve ser um número.')
        }

        const data = await connection("Users").select().where({id:userId})

        if(data.length < 1){
            statusCode = 404
            throw new Error('o ID informado não corresponde a nenhum usuário.')
        }

        statusCode = 200

        res.status(statusCode).send(data)

    }catch(error:any){
        res.status(statusCode).send(error.message)
    }
})

//edit infos from user by id
app.put('/user/edit/:id',async(req:Request, res:Response)=>{
    let statusCode:number = 500
    try{
        const userId:number = Number(req.params.id)
        const {name,nickname,email} = req.body

        if(isNaN(userId)){
            statusCode = 406
            throw new Error('O id deve ser um número.')
        }
        const data = await connection("Users").select().where({id:userId})
        if(data.length < 1){
            statusCode = 404
            throw new Error('o ID informado não corresponde a nenhum usuário.')
        }
        if(!isNaN(Number(name))){
            statusCode = 406
            throw new Error('O nome não pode ser vazio nem um numeral.')
        }
        if(!isNaN(Number(nickname))){
            statusCode = 406
            throw new Error('O nickname não pode ser vazio nem um numeral.')
        }
        if(!isNaN(Number(email))){
            statusCode = 406
            throw new Error('O email não pode ser vazio nem um numeral.')
        }
        if(name){
            await connection("Users").update({name}).where({id:userId})
        }
        if(nickname){
            await connection("Users").update({nickname}).where({id:userId})
        }
        if(email){
            await connection("Users").update({email}).where({id:userId})
        }
        statusCode = 200

        res.status(statusCode).send("Informações alteradas com sucesso.")

    }catch(error:any){
        res.status(statusCode).send(error.message)
    }
})

// create post
app.post('/task',async(req:Request,res:Response)=>{
    let statusCode:number = 500
    try{
        const {title,description,limitDate,creatorUserId} = req.body
        if(!title){
            statusCode = 422
            throw new Error('É necessário informar o título da tarefa.')
        }        
        if(!description){
            statusCode = 422
            throw new Error('É necessário informar a descrição da tarefa.')
        }
        if(!limitDate){
            statusCode = 422
            throw new Error('É necessário informar a data limite da tarefa da tarefa.')
        }
        if(!creatorUserId){
            statusCode = 422
            throw new Error('É necessário informar o ID do criador da tarefa.')
        }
        const user = await connection('Users').select().where({id:creatorUserId})

        if(user.length < 1){
            statusCode = 404
            throw new Error('o ID informado não corresponde a nenhum usuário.')
        }
        const newTask = {
            title,
            description,
            limitDate : limitDate.split('/').reverse().join('/'),
            creatorUserId,
            creatorUserNickname:user[0].nickname,
            id:idGen()
        }
        await connection('Tasks').insert(newTask)
        statusCode = 201
        res.status(statusCode).send('Tarefa criada com sucesso!')
    }catch(error:any){
        res.status(statusCode).send(error.message)
    }
})

//get task by id
app.get('/task/:id',async(req:Request,res:Response)=>{
    let statusCode:number = 500
    try{
        const taskId = req.params.id

        const task = await connection("Tasks").select().where({id:taskId})

        if(task.length < 1){
            statusCode = 404
            throw new Error('o ID informado não corresponde a nenhum usuário.')
        }

        const taskToSend = {
            taskId,
            title: task[0].title,
            description: task[0].description,
            limitDate: task[0].limitDate.split('/').reverse().join('/'),
            status: task[0].status,
            creatorUserId: task[0].creatorUserId,
            creatorUserNickname: task[0].creatorUserNickname,
        }

        statusCode = 200

        res.status(statusCode).send(taskToSend)

    }catch(error:any){
        res.status(statusCode).send(error.message)
    }
})



app.listen(3003,()=>console.log('The server is running in http://localhost:3003/'))
