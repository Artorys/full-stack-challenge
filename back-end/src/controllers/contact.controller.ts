import { Response} from "express";
import { ValidationError } from "yup";
import { IRequestCLient } from "../interfaces/client.interface";
import { ContactService } from "../services/contact.service";
import createPDF from "pdfmake"
import { createWriteStream } from "fs"
import { TDocumentDefinitions } from "pdfmake/interfaces"
import { ClientService } from "../services/client.service";
import { IContact } from "../interfaces/contact.interface";

export class ContactController{
    
    static async pdf(req : IRequestCLient,res: Response){
    
        try{
            const client_id = req.client_id
            const client = await ClientService.get(client_id)

            client.created_at = String(client.created_at)
            
            const contacts = client.contacts as Array<IContact>

            const date = client.created_at.match(/[a-z]{3} [a-z]{3} [0-9]{2} [0-9]{4}/gi) as RegExpMatchArray
            const time = client.created_at.match(/\d{2}:\d{2}:\d{2}(?!T)/) as RegExpMatchArray    

            const contactsPDF = []

            if(contacts.length > 0){
                contacts.forEach((contact : IContact)=>{
                    const {email,full_name,phone,created_at} = contact
                    
                    const created = String(created_at)
    
                    const date = created.match(/[a-z]{3} [a-z]{3} [0-9]{2} [0-9]{4}/gi) as RegExpMatchArray
                    const time = created.match(/\d{2}:\d{2}:\d{2}(?!T)/) as RegExpMatchArray 
    
                    
                    contactsPDF.push(["Nome completo",full_name],["Email",email],["Telefone",phone],["Data da criacão",date[0]],["Hora da criação",time[0]])
    
                })
            }


            const fonts = {
                Helvetica: {
                  normal: 'Helvetica',
                  bold: 'Helvetica-Bold',
                  italics: 'Helvetica-Oblique',
                  bolditalics: 'Helvetica-BoldOblique'
              }
            }
              const docDefinitions : TDocumentDefinitions = {
                defaultStyle : {font : "Helvetica"},
                pageSize : "A5",
                pageMargins: [ 40, 60, 40, 60 ],
                pageOrientation : "portrait",
                content :  
                        [{marginTop : 16,stack : 
                            [{text : "Cliente",style : "header"},
                                {table : {
                                    body :
                                    [["Nome completo",client.full_name],
                                    ["Email",client.email],
                                    ["Telefone",client.phone],
                                    ["Data da criacão",date[0]],
                                    ["Hora da criação",time[0]]]
                                    }
                                }
                            ]
                        },
                {marginTop : 16,stack : 
                    [
                        {text : "Contatos do cliente",style : "header"},
                            {table : contactsPDF ? {
                                body :
                                contactsPDF
                            } : {
                                body : [["Sem contatos"]]
                            }
                            }
                    ]
                }]
                    ,styles : {header : {bold : true,fontSize : 16,marginBottom : 20}}}
              
              const pdfMaker = new createPDF(fonts)
              const pdfDoc = pdfMaker.createPdfKitDocument(docDefinitions)
              pdfDoc.pipe(createWriteStream("contacts.pdf"))
            
              const chunks = []
            
              pdfDoc.on("data",(chunk)=>{
                chunks.push(chunk)
              })
              
              pdfDoc.end()
            
              pdfDoc.on("end",()=>{
                const bufferPDF = Buffer.concat(chunks)
                return res.end(bufferPDF)
              })
        }
        catch(err){
            if(err instanceof Error){
                const message = {"message" : "Você não possui contatos"}
                return res.status(400).json(message)
            }
            const message = {"message" : "Internal server error"}
            return res.status(500).json(message)
        }
    }
    
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