import { Dispatch, ReactElement, SetStateAction, createContext, useState } from "react";

interface IClient{
    id : string;
    full_name : string;
    email : string;
    data : string;
    hora : string
    phone : string;
}
interface IClientContext{
    client : IClient
    setClient : Dispatch<SetStateAction<IClient>>

}
interface IClientProviderProps{
    children : ReactElement
}

export const ClientContext = createContext({} as IClientContext)

export function ClientProvider(props : IClientProviderProps ){

    const [client,setClient] = useState({full_name : ""} as IClient)

    return(
        <ClientContext.Provider value={{client,setClient}}>{props.children}</ClientContext.Provider>
    )
}