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
    let statusCode = 500
    const productName = (req.body.name as string)
    const productPrice = (req.body.price as number)

    try{
        if(!productName || !productPrice){
            statusCode=422
            console.log(productName,productPrice,req.body)
            throw new Error("É necessário informar o nome e preço do produto!") 
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
    let statusCode = 500
    const productId = req.params.id
    const matchId = dinamicData.find((product)=> product.id === productId)
    const newPrice = (req.body.price as number)
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
        const newData:product[] = dinamicData.filter((product)=>{
            return product.id !== productId
        })
        const attProduct:product[] = dinamicData.filter((product)=>{
            if(product.id === productId){
                product.price = newPrice
                return
            } 
        })

        dinamicData = [...newData,...attProduct]

        res.status(200).send(dinamicData)

       
        
    }catch(error:any){
        res.send(error.message)
    }
})




app.listen(3003,()=>{console.log('The server is running in http://localhost:3003/')})