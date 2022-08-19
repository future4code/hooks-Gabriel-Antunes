import express from 'express';
import cors from 'cors';

const app = express()

app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>[
    res.send("Hello baby")
])

app.listen(3003,()=>{
    console.log("Server is running in http://localhost:3003")
})