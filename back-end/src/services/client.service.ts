import { ConnectionDB } from "../data-source"
import { Client} from "../entities/client.entity"
import { clientSchema, clientUpdateSchema, loginSchema } from "../schema/client.schema"
import {hash,compare} from "bcryptjs"
import {sign} from "jsonwebtoken"
import {classToPlain} from "class-transformer"
import { IClient } from "../interfaces/client.interface"

export class ClientService{

    static clientRepository = ConnectionDB.getRepository(Client)

    static async get(id : number){
            const clientRepository = this.clientRepository
            const clientById = await clientRepository.findOneBy({id : id})
            if(clientById === null){
                throw new Error("Cliente não encontrado")
            }
            return classToPlain(clientById)
    }
    static async post(data : IClient){ 
        const validated_data = await clientSchema.validate(data,{abortEarly : false,stripUnknown : true})
        const email = validated_data.email

        const checkDuplicatedEmail = await this.clientRepository.findOneBy({email : email})

        if(checkDuplicatedEmail){
            throw new Error("Esse Email já está em uso")
        }
        //hashing password to saves in DB
        validated_data.password = await hash(validated_data.password,10)

        const clientCreated = this.clientRepository.create(validated_data)
        const client = this.clientRepository.save(clientCreated)

        return classToPlain(client)
    }
    static async login(data : IClient){
        const validated_data = await loginSchema.validate(data,{abortEarly : false,stripUnknown : true})
        
        const checkUserExist = await this.clientRepository.findOneBy({email : validated_data.email})

        if(!checkUserExist){
            throw new Error("Email ou senha incorretos")
        }

        const comparePassword = await compare(validated_data.password,checkUserExist.password)

        if(!comparePassword){
            throw new Error("Email ou senha incorretos")
        }

        const TokenForUser = sign({id : checkUserExist.id},process.env.SECRET_KEY,{expiresIn : "24h"})
        
        return TokenForUser
    }
    static async patch(id : number,data : IClient){
        const checkUserExist = await this.clientRepository.findOneBy({id : id})
        if(!checkUserExist){
            throw new Error("Cliente não encontrado")
        }
        const validatedData = await clientUpdateSchema.validate(data,{abortEarly : false,stripUnknown: true})

        checkUserExist.full_name = validatedData.full_name ? validatedData.full_name : checkUserExist.full_name
        checkUserExist.email = validatedData.email ? validatedData.email : checkUserExist.email
        checkUserExist.password = validatedData.password ? await hash(validatedData.password,10) : checkUserExist.password
        checkUserExist.phone = validatedData.phone ? validatedData.phone : checkUserExist.phone
        
        const updatedUser = await this.clientRepository.save(checkUserExist)

        return classToPlain(updatedUser)
    }
    static async delete(id : number){
        const checkUserExist = await this.clientRepository.findOneBy({id:id})
        if(!checkUserExist){
            throw new Error("Cliente não encontrado")
        }
        await this.clientRepository.delete(id)
    }
}