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
            const contact = await this.clientRepository.findOne({relations : {contacts : true},where : {id : client_id,contacts : {id : contact_id}}})
            if(!contact){
                throw new Error("Client not have this contact")
            }
            return contact.contacts[0]
    }
    static async list(client_id : number){
        const client = await this.clientRepository.findOne({where : {id : client_id},relations : {contacts : true}}) 

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

        contact = await this.contactRepository.save(contact)

        return contact
    }
    static async patch(client_id : number,contact_id : number,data : IClient){
        const {contacts} = await this.clientRepository.findOne({relations : {contacts : true},where : {id : client_id,contacts : {id : contact_id}}})

        if(!contacts[0]){
            throw new Error("Client not have this contact")
        }

        const validatedData = await contactUpdateSchema.validate(data,{abortEarly : false,stripUnknown: true})
        
        contacts[0].full_name = validatedData.full_name ? validatedData.full_name : contacts[0].full_name
        contacts[0].email = validatedData.email ? validatedData.email : contacts[0].email
        contacts[0].phone = validatedData.phone ? validatedData.phone : contacts[0].phone
        
        const updatedContact = await this.contactRepository.save(contacts[0])

        return updatedContact
    }
    static async delete(client_id : number,contact_id: number){

        const {contacts} = await this.clientRepository.findOne({relations : {contacts : true},where : {id : client_id,contacts : {id : contact_id}}})

        if(!contacts[0]){
            throw new Error("Client not have this contact")
        }
        return await this.contactRepository.delete(contacts[0].id)
    }
}