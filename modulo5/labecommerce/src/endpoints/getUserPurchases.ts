import { connection } from '../data/connection'
import {Request,Response} from 'express'

const getUserPurchases = async (req:Request,res:Response):Promise<void> =>{
    let statusCode = 500

    try{
        const userId = req.params.user_id as string

        const purchases = await connection('labecommerce_purchases')
        .select()
        .where({user_id : userId})

        res.status(200).send(purchases)
        
    }catch(error:any){
        res.status(statusCode).send(error.message)
    }
}

export default getUserPurchases