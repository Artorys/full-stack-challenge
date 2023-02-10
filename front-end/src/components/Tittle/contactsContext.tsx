import { Dispatch, ReactElement, SetStateAction, createContext, useState } from "react";

export interface IContact{
    id : string
    full_name : string;
    email : string;
    phone : string;
    created_at : string;
}
interface IContactsContext{
    contacts : IContact[]
    setContacts : Dispatch<SetStateAction<IContact[]>>

}
interface IContactsProviderProps{
    children : ReactElement
}

export const ContactsContext = createContext({} as IContactsContext)

export function ContactsProvider(props : IContactsProviderProps ){

    const [contacts,setContacts] = useState([{}] as IContact[])

    return(
        <ContactsContext.Provider value={{contacts,setContacts}}>{props.children}</ContactsContext.Provider>
    )
}