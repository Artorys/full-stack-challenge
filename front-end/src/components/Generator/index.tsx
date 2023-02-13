import { useNavigate } from "react-router-dom";
import { StyledDiv } from "./style";
import { useContext, useEffect, useRef } from "react";
import { ToastContext } from "../../context/toastContext";
import { ContactsContext } from "../Tittle/contactsContext";

export function Generator(){

    const aRef = useRef(null)

    const {isToasted,setToasted} = useContext(ToastContext)
    const {contacts} = useContext(ContactsContext)


    return (
        contacts.length > 0 ?
        <StyledDiv><a onClick ={async (e)=>{
            const token = localStorage.getItem("$TOKEN")
            await fetch('http://localhost:3000/contact/pdf/',{headers : {Authorization : `Bearer ${token}`}}).then(response => {
                if(response.status >= 400){
                    setToasted({active : true,message : "Você não possui contatos",type: "error"})
                    setTimeout(()=>{
                        setToasted({active : false,message : "",type : ""})
                    },2000)
                    const a = (aRef.current as unknown) as HTMLAnchorElement
                }
                else{
                    response.blob().then(blob => {
                        const url = window.URL.createObjectURL(blob)
                        const a = (aRef.current as unknown) as HTMLAnchorElement
                        a.download = "contacts.pdf"
                        a.href = url
                    })
                }
            })


        }} target="_blank" ref={aRef}>Gerar PDF</a></StyledDiv>
         :   <StyledDiv className="disable"><p>Adicione Contatos</p></StyledDiv>
)}