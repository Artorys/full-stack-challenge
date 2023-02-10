import { FieldValues } from "react-hook-form";
import { AxiosError } from "axios";
import { apiLogin } from "../api";

export async function login(data: FieldValues){
    let responseData = {type : "", data : "",token : "",message : ""}
    try{
        const response = await apiLogin.post("",data)
        const token = response.data?.token

        responseData.type = "success"
        responseData.token = token

        return responseData
    }   
    catch(err){
        if(err instanceof AxiosError){
            responseData.type = "error"
            responseData.message = err.response?.data.message
            return responseData
        }
    }
}