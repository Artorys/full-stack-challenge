import { FormEventHandler, ReactElement, useContext, useEffect, useRef } from "react";
import { StyledForm } from "./style";
import { useState } from "react";
import { FieldValues, UseFormHandleSubmit } from "react-hook-form";
import { sendData } from "../../utils/form.util";
import { AuthContext } from "../../context/authContext";
import { ToastContext } from "../../context/toastContext";

interface IFormProps{
    children : ReactElement[] | ReactElement
    handleSubmit : UseFormHandleSubmit<FieldValues>
    type : "register" | "login" | "contact"
}

export function Form(props: IFormProps){

    
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
    },[])

    const {isToasted,setToasted} = useContext(ToastContext)
    const {isAuth,setIsAuth} = useContext(AuthContext)

    const formRef = useRef(null)
    const [isOverflow,setOverflow] = useState(false)

    return(
        <StyledForm onSubmit={props.handleSubmit(async data=>{
           const response = await sendData(props.type,data)
            if(response == "error"){
                setToasted(true)
                setTimeout(()=>{
                    setToasted(false)
                },2000)
            }
            const token = window.localStorage.getItem("$TOKEN")
            if(token){
                setIsAuth(true)
            }
            else{
                setIsAuth(false)
            }
        })} isOverflow = {isOverflow} ref={formRef}>{props.children}</StyledForm>
    )
}