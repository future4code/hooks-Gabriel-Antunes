import { connection } from '../data/connection'
import {Request,Response} from 'express'

const getUsers = async (req:Request,res:Response):Promise<void> =>{
    let statusCode = 500

    try{
        let users = await connection('labecommerce_users')
        .select('name','email','id')
        
        const purchasesDb = await connection('labecommerce_purchases')
        .select()

        users = users.map((user)=>{
            const purchases = purchasesDb.filter((purchase)=>purchase.user_id === user.id)
            if(purchases.length >0){
                const userWithPurchases = {...user,purchases}
                return userWithPurchases
            }else{
                return {...user,"purchases":[]}
            }  
        })

        res.status(200).send(users)
        
    }catch(error:any){
        res.status(statusCode).send(error.message)
    }
}

export default getUsers
