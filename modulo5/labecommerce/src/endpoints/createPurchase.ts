import {v4 as idGen} from 'uuid'
import { connection } from '../data/connection'
import {Request,Response} from 'express'
import { purchase } from '../types'

const createPurchase = async(req:Request, res:Response)=>{
    let statusCode = 500
    try{
        const userId = req.body.user_id as string
        const productId = req.body.product_id as string
        const quantity = Number(req.body.quantity)
 
        if(!userId || !productId || !quantity){
            statusCode = 422
            throw new Error('É necessario informar o id do usuário, o id do produto e a quantidade de produtos.')
        }

        if(isNaN(quantity)){
            statusCode = 406
            throw new Error('A quantidade deve conter apenas números.')
        }

        const checkUser = await connection('labecommerce_users')
        .select()
        .where({id : userId})
        
        let checkProduct = await connection('labecommerce_products')
        .select('price')
        .where({id:productId})

        if(checkUser.length < 0){
            statusCode = 409
            throw new Error('O id de usuário informado não existe.')
        }

        if(checkProduct.length < 0){
            statusCode = 409
            throw new Error('O id de produto informado não existe.')
        }

        const productPrice = Number(checkProduct[0].price)

        if(isNaN(productPrice)){
            statusCode = 400
            throw new Error('Houve um problema ao finalizar sua compra, contate o administrador do site.')
        }
        const newPurchase:purchase={
            id:idGen(),
            user_id:userId,
            product_id:productId,
            quantity,
            total_price : productPrice * quantity
        }
        
        await connection('labecommerce_purchases').insert(newPurchase)

        statusCode = 201

        res.status(statusCode).send('Compra registrada com sucesso')
      
    }catch(error:any){
        res.status(statusCode).send(error.message)
    }
}
export default createPurchase