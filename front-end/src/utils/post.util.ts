import { FieldValues } from "react-hook-form";
import { apiClient, apiContact, apiLogin } from "../api";
import { AxiosError } from "axios";
import { IType } from "./form.util";

export async function create(type : IType,data : FieldValues){
    let responseData = {type : "", data : "",token : "",message : ""}
    try{
        if(type == "client"){
            await apiClient.post("",data)
            const response = await apiLogin.post("",data)
            const token = response.data.token

            responseData.type = "success"
            responseData.token = token

            return responseData
        }
        if(type == "contact"){
            const token = window.localStorage.getItem("$TOKEN") as string
            const response = await apiContact.post("",data,{headers : {Authorization : `Bearer ${token}`}})

            responseData.type = "success"
            responseData.token = token
            responseData.message = "Contato criado com sucesso!"

            return responseData
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