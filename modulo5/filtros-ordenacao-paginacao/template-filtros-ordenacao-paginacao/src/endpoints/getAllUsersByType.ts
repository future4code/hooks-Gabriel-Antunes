import { Request, Response } from "express"
import { connection } from "../data/connection"



export const getAllUsersByType = async(req: Request,res: Response): Promise<void> =>{
let errorCode:number = 500
   try {
      const type = (req.params.type as string).toLocaleLowerCase()
      const users = await connection('aula48_exercicio').where('type','like',`${type.toLowerCase()}`)

      if(!users.length){
         res.statusCode = 404
         throw new Error("No users found")
      }

      res.status(200).send(users)
      
   } catch (error:any) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
}