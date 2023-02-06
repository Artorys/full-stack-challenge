import { Request, Response, response } from "express";
import { ClientService } from "../services/client.service";
import { ValidationError } from "yup";
import { IRequestCLient } from "../interfaces/client.interface";

export class ClientController{
    
    static async get(req : Request,res : Response){
        try{
            const id = req.params.id
            const response = await ClientService.get(Number(id))
            return res.status(200).json(response)
        }
        catch(err){
            if(err instanceof Error){
                const message = {"message" : err.message}
                return res.status(404).json(message)
            }
            const message = {"message" : "Internal server error"}
            return res.status(500).json(message)
        }
    }
    static async post(req : Request,res : Response){
         try{
            const data = req.body
            const response = await ClientService.post(data)
            return res.status(200).json(response)
        }
        catch(err){
            if(err instanceof ValidationError){
                const message = {"message" : err.errors}
                return res.status(400).json(message)
            }
            if(err instanceof Error){
                const message = {"message" : err.message}
                return res.status(400).json(message)
            }
            const message = {"message" : "Internal server error"}
            return res.status(500).json(message)
        }
    }
    static async login(req : Request,res : Response){
        try{
           const data = req.body
           const response = await ClientService.login(data)
           const token = {token : response}
           return res.status(200).json(token)
       }
       catch(err){
           if(err instanceof ValidationError){
                const message = {"message" : err.errors}
                return res.status(400).json(message)
           }
           if(err instanceof Error){
                const message = {"message" : err.message}
                return res.status(400).json(message)
           }
           const message = {"message" : "Internal server error"}
           return res.status(500).json(message)
       }
   }
    static async patch(req : IRequestCLient,res : Response){
        try{
            const data = req.body
            const id = req.client_id
            const response = await ClientService.patch(id,data)
            return res.status(200).json(response)
        }
        catch(err){
            if(err instanceof Error){
                const message = {message : err.message}
                return res.status(404).json(message)
            }
            if(err instanceof ValidationError){
                const message = {message : err.errors}
                return res.status(400).json(message)
            }
            const message = {"message" : "Internal server error"}
            return res.status(500).json(message)
        }
    }
    static async delete(req : IRequestCLient,res : Response){
        try{
            const id = req.client_id
            await ClientService.delete(id)
            console.log("salve")
            return res.status(204).send()
        }
        catch(err){
            if(err instanceof Error){
                const message = {message : err.message}
                return res.status(404).json(message)
            }
            const message = {"message" : "Internal server error"}
            return res.status(500).json(message)
        }
    }
}