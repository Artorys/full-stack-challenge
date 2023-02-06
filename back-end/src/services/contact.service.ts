import { ConnectionDB } from "../data-source"
import { Client} from "../entities/client.entity"
import { clientSchema, clientUpdateSchema, loginSchema } from "../schema/client.schema"
import {hash,compare} from "bcryptjs"
import {sign} from "jsonwebtoken"
import {classToPlain} from "class-transformer"
import { IClient } from "../interfaces/client.interface"
import { Contact } from "../entities/contact.entity"
import { contactSchema, contactUpdateSchema } from "../schema/contact.schema"
import { IContact } from "../interfaces/contact.interface"

export class ContactService{

    static contactRepository = ConnectionDB.getRepository(Contact)
    static clientRepository = ConnectionDB.getRepository(Client)

    static async get(client_id : number,contact_id : number){
            const client = await this.clientRepository.findOneBy({id: client_id})

            if(!client?.contacts){
                throw new Error("Client no have contacts")
            }

            const contact = client.contacts.find((contact)=> contact.id == contact_id)

            if(!contact){
                throw new Error("Client not have this contact")
            }

            return contact
    }
    static async list(client_id : number){
        const client = await this.clientRepository.findOneBy({id: client_id})

        if(!client?.contacts){
            throw new Error("Client no have contacts")
        }

        const contacts = client.contacts
    
        return contacts
}
    static async post(client_id : number,data : IContact){ 
        const validated_data = await contactSchema.validate(data,{abortEarly : false,stripUnknown : true})

        const client = await this.clientRepository.findOneBy({id : client_id})

        let contact = new Contact()

        //add contact on client
        contact.client = client
        contact.email = validated_data.email
        contact.full_name = validated_data.full_name
        contact.phone = validated_data.phone

        contact = this.contactRepository.create(contact)

        this.contactRepository.save(contact)

        return contact
    }
    static async patch(client_id : number,contact_id : number,data : IClient){
        const client = await this.clientRepository.findOneBy({id : client_id})

        if(!client?.contacts){
            throw new Error("Client no have contacts")
        }

        const contact = client.contacts.find((contact)=> contact.id == contact_id)

        if(!contact){
            throw new Error("Client not have this contact")
        }

        const validatedData = await contactUpdateSchema.validate(data,{abortEarly : false,stripUnknown: true})

        contact.full_name = validatedData.full_name ? validatedData.full_name : contact.full_name
        contact.email = validatedData.email ? validatedData.email : contact.email
        contact.phone = validatedData.phone ? validatedData.phone : contact.phone
        
        const updatedContact = await this.contactRepository.save(contact)

        return updatedContact
    }
    static async delete(client_id : number,contact_id: number){
        const client = await this.clientRepository.findOneBy({id:client_id})

        if(!client?.contacts){
            throw new Error("Client no have contacts")
        }

        const contact = client.contacts.find((contact)=> contact.id == contact_id)

        if(!contact){
            throw new Error("Client not have this contact")
        }
        return await this.contactRepository.delete(contact.id)
    }
}