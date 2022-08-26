import  express,{Request, Response}  from "express"
import cors from 'cors'
import {v4 as idGen} from 'uuid'
import {data, product} from './data'

const app = express()
app.use(express.json())
app.use(cors())

let dinamicData:product[] = data


app.get('/test',(req, res)=>{
    res.send('API is OK!')
})

app.post('/add-product',(req:Request,res:Response) => {
    let statusCode:number = 500
    const productName:string | undefined = (req.body.name as string)
    const productPrice:number| undefined = (req.body.price as number)

    try{
        if(!productName || !productPrice){
            statusCode=422
            throw new Error("É necessário informar o nome e preço do produto!") 
        }
        if(productPrice <= 0){
            statusCode=412
            throw new Error("O valor do produto deve ser maior que zero.") 
        }

        const newProduct:product= {
            id:idGen(),
            name:productName.toLocaleLowerCase(),
            price:productPrice
        }

        dinamicData = [...dinamicData,newProduct]

        res.status(201).send(dinamicData)

    }catch(error:any){
        res.status(statusCode).send(error.message)
    }
})

app.get('/get-products',(req:Request,res:Response)=>{
    try{
        res.status(200).send(dinamicData)
    }catch(error:any){
        res.send(error.message)
    }
})

app.put('/product-edit',(req:Request,res:Response)=>{
    let statusCode:number = 500
    const productId:string | undefined = (req.query.id as string)
    const matchId = dinamicData.find((product)=> product.id === productId)
    const newPrice:number | undefined = Number(req.query.price)

    try{
        if(!productId){
            statusCode=400
            throw new Error("É necessário fornecer o ID do produto.")
        }
        if(!matchId){
            statusCode=404
            throw new Error("ID informado não encontrado na lista de produtos.")
        }
        if(!newPrice){
            statusCode=400
            throw new Error("É necessário fornecer o novo preço do produto.")
        }
        if(newPrice <= 0){
            statusCode=412
            throw new Error("O valor do produto deve ser maior que zero.") 
        }
        

        const newList:product[] = dinamicData.map((product)=>{
            if(product.id === productId){
                product.price = newPrice
                return product
            }else{
                return product
            }
        })

        dinamicData = newList

        res.status(200).send(dinamicData)
        
    }catch(error:any){
        res.status(statusCode).send(error.message)
    }
})

app.delete('/product-delete',(req:Request,res:Response)=>{
    let statusCode:number = 500
    const productId:string | undefined = (req.query.id as string)
    const matchId = dinamicData.find((product)=>product.id === productId)
    try{
        if(!productId){
            statusCode=400
            throw new Error("É necessário fornecer o ID do produto.")
        }
        if(!matchId){
            statusCode=404
            throw new Error("ID informado não encontrado na lista de produtos.")
        }
       
        const newList:product[] = dinamicData.filter((product)=>product.id !== productId)
        dinamicData = newList

        res.status(200).send(dinamicData)

    }catch(error:any){
        res.status(statusCode).send(error.message)

    }
})




app.listen(3003,()=>{console.log('The server is running in http://localhost:3003/')})