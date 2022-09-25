import { connection } from '../data/connection'
import {Request,Response} from 'express'
import { Order } from '../types'

const getProducts = async (req:Request,res:Response):Promise<void> =>{
    let statusCode = 500

    try{
        let order = req.query.order as Order
        let search = req.query.search as string
        let sort = "name"

        if(!order){
            sort = "id"
        }
        if(!search){
            search = "%"
        }

        const users = await connection('labecommerce_products')
        .select()
        .where("name", "like", `%${search}%`)
        .orderBy(sort,order)

        res.status(200).send(users)
        
    }catch(error:any){
        res.status(statusCode).send(error.message)
    }
}

export default getProducts