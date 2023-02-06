import { Request, Response} from "express";
import { ValidationError } from "yup";
import { IRequestCLient } from "../interfaces/client.interface";
import { ContactService } from "../services/contact.service";

export class ContactController{
    
    static async get(req : IRequestCLient,res : Response){
        try{
            const client_id = req.client_id
            const contact_id = req.params.id
            const response = await ContactService.get(client_id,Number(contact_id))
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
    static async list(req : IRequestCLient,res : Response){
        try{
            const client_id = req.client_id
            const response = await ContactService.list(client_id)
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
    static async post(req : IRequestCLient,res : Response){
         try{
            const client_id = req.client_id
            const data = req.body
            const response = await ContactService.post(client_id,data)
            return res.status(200).json(response)
        }
        catch(err){
            if(err instanceof ValidationError){
                const message = {"message" : err.errors}
                return res.status(400).json(message)
            }
            const message = {"message" : "Internal server error"}
            return res.status(500).json(message)
        }
    }
    static async patch(req : IRequestCLient,res : Response){
        try{
            const data = req.body
            const client_id = req.client_id
            const contact_id = req.params.id
            const response = await ContactService.patch(client_id,Number(contact_id),data)
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
            const client_id = req.client_id
            const contact_id = req.params.id
            await ContactService.delete(client_id,Number(contact_id))
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