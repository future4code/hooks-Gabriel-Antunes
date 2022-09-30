import { Request, Response } from "express"
import { connection } from "../data/connection"



export const getAllUsersSort = async(req: Request,res: Response): Promise<void> =>{
let errorCode:number = 500
   try {
      let type = (req.params.type as string).toLowerCase()
      let name = req.query.type as string
      let sort = req.query.sort as string
      let order = (req.query.order as string).toUpperCase()

      if(!name){
         name="%"
      }
      const users = await connection('aula48_exercicio')
      .where('name','like',`%${name}%`)
      .orderBy('name','ASC')

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