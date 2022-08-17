import  express  from "express";
import cors from "cors";
import { match } from "assert";

const app = express();

app.use(express.json());
app.use(cors());


app.get('/',(req,res)=>{
    res.send('Hello from Express')
})

type user = {
    id:number,
    name:string,
    phone:number,
    email:string,
    website:string,
    posts:post[]
}

const users:user[]=[
    {
        id:1,
        name:"teste",
        phone:516515,
        email:"dsadjas@djsadoisa.com",
        website:"www.fdsadas.com",
        posts:[
            {
                id:1,
                title:"qualquer",
                body:"um texto qualquer",
                userId:1
            },
            {
                id:2,
                title:"qualquer2",
                body:"um texto qualquer",
                userId:1
            },
            {
                id:3,
                title:"qualquer3",
                body:"um texto qualquer",
                userId:1
            },
        ]
    },
    {
        id:2,
        name:"teste2",
        phone:516515,
        email:"dsadjas@djsadoisa.com",
        website:"www.fdsadas.com",
        posts:[
            {
                id:1,
                title:"qualquer",
                body:"um texto qualquer",
                userId:2
            },
            {
                id:2,
                title:"qualquer2",
                body:"um texto qualquer",
                userId:2
            },
            {
                id:3,
                title:"qualquer3",
                body:"um texto qualquer",
                userId:2
            },
        ]
    },
    {
        id:3,
        name:"teste3",
        phone:516515,
        email:"dsadjas@djsadoisa.com",
        website:"www.fdsadas.com",
        posts:[
            {
                id:1,
                title:"qualquer",
                body:"um texto qualquer",
                userId:3
            },
            {
                id:2,
                title:"qualquer2",
                body:"um texto qualquer",
                userId:3
            },
            {
                id:3,
                title:"qualquer3",
                body:"um texto qualquer",
                userId:3
            },
        ]
    },
    {
        id:4,
        name:"teste4",
        phone:516515,
        email:"dsadjas@djsadoisa.com",
        website:"www.fdsadas.com",
        posts:[
            {
                id:1,
                title:"qualquer",
                body:"um texto qualquer",
                userId:4
            },
            {
                id:2,
                title:"qualquer2",
                body:"um texto qualquer",
                userId:4
            },
            {
                id:3,
                title:"qualquer3",
                body:"um texto qualquer",
                userId:4
            },
        ]
    },
    {
        id:5,
        name:"teste5",
        phone:516515,
        email:"dsadjas@djsadoisa.com",
        website:"www.fdsadas.com",
        posts:[
            {
                id:1,
                title:"qualquer",
                body:"um texto qualquer",
                userId:5
            },
            {
                id:2,
                title:"qualquer2",
                body:"um texto qualquer",
                userId:5
            },
            {
                id:3,
                title:"qualquer3",
                body:"um texto qualquer",
                userId:5
            },
        ]
    },
]

app.get('/users',(req,res)=>{
    res.send(users)
})

type post = {
    id:number,
    title:string,
    body:string,
    userId:number
}

const posts:post[]=[]

//exercicio 6: Eu acho mais adequado criar dentro do array de usuários, pois acaba concentrando todas as informações em um unico local.

app.get('/posts',(req,res)=>{
    const requestPosts = users.map((user)=>{
        return user.posts.flat()
    })

    res.send(requestPosts)
})

app.get('/:userId/posts',(req,res)=>{
    const userId:number = Number(req.params.userId)

    const posts = users.filter((user)=>{
        if(user.id === userId){
            return user.posts
        }
    })

    res.send(posts)
})

app.delete('/:userId/posts/:postId',(req,res)=>{
    const userId:number = Number(req.params.userId) 
    const postId:number = Number(req.params.postId)
})

app.listen(3003,()=>{
    console.log('the server is running in http://localhost/3003')
})