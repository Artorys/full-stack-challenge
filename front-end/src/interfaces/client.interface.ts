export interface IClient{
    id : string
    full_name : string;
    email : string;
    phone : string;
    created_at : string
}
export interface IClientUpdate{
    full_name : string;
    email : string;
    password : string;
    phone : string;
}