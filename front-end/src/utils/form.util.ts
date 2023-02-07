import { apiClient, apiContact, apiLogin } from "../api";

export async function sendData(type : string, data : Object){
    try{
        if(type == "register"){
            await apiClient.post("",data)
        }
        if(type == "login"){
            const response = await apiLogin.post("",data)
            const token = response.data?.token
            window.localStorage.setItem("$TOKEN",token)
        }
        if(type == "contact"){
            await apiContact.post("",data)
        }
    }
    catch(err){
        return "error"
    }
}