import  express from "express";
import cors from 'cors';
import { tarefasDB,tarefa } from "./data";
import {v4 as idGenerator} from 'uuid';
 

const app = express()

app.use(express.json())
app.use(cors())

// exercicio 01
app.get('/ping',(req,res)=>{
    res.send('Pong!')
})


const tarefas:tarefa[][]=[tarefasDB]

app.get('/tarefas',(req, res)=>{
    try{
        const afazer: string = (req.query.afazer as string).toLocaleLowerCase()

        if(!afazer){
            res.send('Selecionar filtro de tarefas')
        } 
        
        let completed:boolean | null = null

        if(afazer === 'true'){
            completed=true
        }
        if(afazer === 'false'){
            completed=false
        }
        if(completed === null){
            res.send("Selecionar 'true' ou 'false' para visualizar as tarefas correspondentes")
        }

        const listaTarefas:tarefa[]=tarefasDB.filter((tarefa)=> tarefa.completed === completed)
        res.send(listaTarefas)

        completed=null
        
    }catch(error){
        res.send(tarefasDB)
    }

app.put('/tarefas/criar',(req,res)=>{
    try{
        const body:tarefa = req.body
        
        if(!body){
            res.send('Informe as informações da tarefa.')
        }
        if(!body.name){
            res.send('Informar o nome da tarefa.')
        }
        if(!body.userId){
            res.send('Informar o id do usuário')
        }

        const tarefas:tarefa[] = tarefasDB.filter((tarefa)=> tarefa.completed === false)
        
        const novaTarefa = {body,id:idGenerator(),completed:false}

        const novasTarefas = [...tarefas,novaTarefa]

        res.send(novasTarefas)
    }catch{
        res.send('Não foi possível completar sua solicitação. Confira os dados informados.')
    }
})    

})

app.listen(3003,()=>{
    console.log('The server is running in http://localhost:3003/')
})