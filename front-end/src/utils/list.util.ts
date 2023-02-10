import { AxiosError } from "axios";
import { apiClient, apiContact } from "../api";

export async function list(type : "contact" | "client"){
    let responseData = {type : "", data : "",token : "",message : ""}
    try{
        if(type == "client"){
            const token = window.localStorage.getItem("$TOKEN")
            const response = await apiClient.get("",{headers : {Authorization : `Bearer ${token}`}})
            responseData.type = "success"
            responseData.data = response.data
            return responseData
        }
        if(type == "contact"){
            const token = window.localStorage.getItem("$TOKEN")
            const response = await apiContact.get("",{headers : {Authorization : `Bearer ${token}`}})
            responseData.type = "success"
            responseData.data = response.data
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