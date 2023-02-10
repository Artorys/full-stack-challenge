import { AxiosError } from "axios";
import {FieldValues } from "react-hook-form";
import { create } from "./post.util";
import { update } from "./update.util";
import { login } from "./login.util";
import { remove } from "./delete.util";

export type IType = "client" | "contact"
export type ISubType = "create" | "login" | "update" | "delete"

export async function sendData(type : IType,subtype : ISubType, data : FieldValues,id? : string){

    if(type == "client"){
        if(subtype == "create"){
            return await create(type,data)
        }
        if(subtype == "login"){
            return await login(data)
        }
        if(subtype == "update"){
            return await update(type,data)
        }
    }
    if(type == "contact"){
        if(subtype == "create"){
            return await create(type,data)
        }
        if(subtype == "login"){
            return await login(data)
        }
        if(subtype == "update"){
            return await update(type,data,id)
        }
    }
}