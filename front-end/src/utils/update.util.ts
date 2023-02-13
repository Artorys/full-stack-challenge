import { FieldValues } from "react-hook-form";
import { apiClient, apiContact } from "../api";
import { IClientUpdate } from "../interfaces/client.interface";
import { IContactUpdate } from "../interfaces/contact.interface";
import { AxiosError } from "axios";

type IKeyClientType = "full_name" | "email" | "password" | "phone"
type IKeyContactType = "full_name" | "email" | "phone"

export async function update(type : "contact" | "client",data: FieldValues,id? : string){
    let responseData = {type : "", data : "",token : "",message : ""}
    try{
        if(type == "client"){
            let validatedData : any = {}
                for (const key in data){
                    if(data[key as IKeyClientType] != ""){
                        validatedData[key] = data[key as IKeyClientType]
                    }
                }
                if(Object.keys(validatedData as IClientUpdate).length > 0){
                    const token = window.localStorage.getItem("$TOKEN") as string
                    await apiClient.patch("",validatedData,{headers : {Authorization : `Bearer ${token}`}})
                    
                    responseData.type = "success"
                    responseData.token = token
                    responseData.message = "Perfil editado com sucesso!"
        
                    return responseData
                }
        }
        if(type == "contact"){
            if(id){
                let validatedData : any = {}
                for (const key in data){
                    if(data[key as IKeyContactType] != ""){
                        validatedData[key] = data[key as IKeyContactType]
                    }
                }
                if(Object.keys(validatedData as IContactUpdate).length > 0){
                    const token = window.localStorage.getItem("$TOKEN") as string
                    await apiContact.patch(`/${id}`,validatedData,{headers : {Authorization : `Bearer ${token}`}})
                    
                    responseData.type = "success"
                    responseData.token = token
                    responseData.message = "contato editado com sucesso!"
        
                    return responseData
                }
            }
        }
    }
    catch(err){
        if(err instanceof AxiosError){
            if(type == "client"){
                responseData.type = "error"
                responseData.message = err.response?.data.message
                return responseData
            }
            if(type == "contact"){
                responseData.type = "error"
                responseData.message = err.response?.data.message
                return responseData
            }
        }
    }
}