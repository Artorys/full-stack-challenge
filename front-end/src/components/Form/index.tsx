import { ReactNode, useContext, useEffect, useRef } from "react";
import { StyledForm } from "./style";
import { useState } from "react";
import { FieldValues, UseFormHandleSubmit } from "react-hook-form";
import { sendData } from "../../utils/form.util";
import { AuthContext } from "../../context/authContext";
import { ToastContext } from "../../context/toastContext";
import { useNavigate } from "react-router-dom";
import { checkTokenStorage } from "../../utils/checkToken.util";
import {list} from "../../utils/list.util"
import { ContactsContext, IContact } from "../Tittle/contactsContext";

interface IFormProps{
    children : ReactNode
    handleSubmit : UseFormHandleSubmit<FieldValues>
    type : "contact" | "client"
    subtype : "update" | "create" | "login"
    id?: string
}

export function Form(props: IFormProps){
    
    const navigate = useNavigate()

    const {isToasted,setToasted} = useContext(ToastContext)
    const {contacts,setContacts} = useContext(ContactsContext)
    const {isAuth,setIsAuth} = useContext(AuthContext)
    
    useEffect(()=>{
        window.addEventListener("resize",()=>{
            const formElement = ((formRef?.current as unknown) as HTMLFormElement)
            if(formElement){
                const scrollHeight = formElement.scrollHeight
                const windowHeight = formElement.clientHeight
                if(scrollHeight > windowHeight){
                    setOverflow((overflow)=> true)
                }
                else{
                    setOverflow((overflow)=> false)
                }
            }
        })
        if(isAuth.auth){
            const isValidToken = checkTokenStorage(isAuth.token)
            if(isValidToken){
                navigate("/Contatos")
            }

        }
    },[isAuth])


    const formRef = useRef(null)
    const [isOverflow,setOverflow] = useState(false)


    return(
        <StyledForm type={props.type} subtype={props.subtype} onSubmit={props.handleSubmit(async data=>{
           const response = await sendData(props.type,props.subtype,data,props.id)
           if(response?.type == "error"){
                setToasted({active : true,message : response.message,type : "error"})
                const timeout = setTimeout(()=>{
                    setToasted({active : false,message : "",type : "error"})
                    clearTimeout(timeout)
                },2000)
                return
            }
            if(response?.type == "success"){
                if(props.type == "contact"){
                    const response = await list(props.type)
                    const contactData : IContact[] = (response?.data as any)
                    setContacts(contactData)
                    
                }
                if(response.message){
                    setToasted({active : true,message : response.message,type: "success"})
                    const timeout = setTimeout(()=>{
                        setToasted({active : false,message : "",type : ""})
                        clearTimeout(timeout)
                     },2000)
                }
                setIsAuth({auth : true,token  : response.token})
                window.localStorage.setItem("$TOKEN",response.token)
            }
        })} isOverflow = {isOverflow} ref={formRef}>{props.children}</StyledForm>
    )
}