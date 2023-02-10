import { apiClient, apiContact } from "../api";

export async function remove(type : "contact" | "client",id? : string){
    let responseData = {type : "", data : "",token : "",message : ""}
    try{
        if(type == "client"){
            const token = window.localStorage.getItem("$TOKEN")
            const response = await apiClient.delete("",{headers : {Authorization : `Bearer ${token}`}})
            responseData.type = "success"
            return responseData
        }
        if(type == "contact"){
            if(id){
                const token = window.localStorage.getItem("$TOKEN")
                await apiContact.delete(`/${id}`,{headers : {Authorization : `Bearer ${token}`}})
                responseData.type = "success"
                return responseData
            }
        }
    }
    catch(err){
        if(type == "client"){
            responseData.type = "error"
            responseData.data = "Não foi possível deletar o perfil"
            return responseData
        }
        if(type == "contact"){
            responseData.type = "error"
            responseData.data = "Não foi possível deletar o contato"
            return responseData
        }
    }
}