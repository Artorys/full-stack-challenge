import { Request } from "express";

export interface IRequestCLient extends Request{
    client_id : number
}
export interface IClient{
    full_name : string
    email : string
    password : string
    phone : string
}