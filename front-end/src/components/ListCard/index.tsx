import { ReactElement, useContext, useEffect } from "react";
import { StyledList } from "./style";
import { apiContact } from "../../api";
import { ContactsContext } from "../Tittle/contactsContext";
import { Card } from "../Card";
import { IContact } from "../../interfaces/contact.interface";
import { Description } from "../Description";

interface IListCardProps{
    children : ReactElement[]
}

export function ListCard(props : IListCardProps){

    const {contacts,setContacts} = useContext(ContactsContext)

    useEffect(()=>{

        async function GetContacts(){
            const token = window.localStorage.getItem("$TOKEN")
            const response = await apiContact.get("",{headers : {Authorization : `Bearer ${token}`}})
            const contacts : IContact[] = response.data
            setContacts(contacts)
        }
        GetContacts()
    },[])

    return <StyledList>
        {contacts.length > 0 ? contacts.map((contact)=>{
            if(contact.created_at){
                const date = contact.created_at.match(/[0-9]{4}-[0-9]{2}-[0-9]{2}/) as RegExpMatchArray
                const time = contact.created_at.match(/\d{2}:\d{2}:\d{2}(?!T)/) as RegExpMatchArray
                return (
                    <Card key={contact.id} phone={contact.phone} id={contact.id} full_name={contact.full_name} date={date[0]} time = {time[0]} email={contact.email}></Card>
                )
            }

        }) : 
            <div className="box__description">
                <p>Lista vazia</p>
            </div>
        }
    </StyledList>
}