import { ReactElement, useEffect, useRef } from "react";
import { StyledForm } from "./style";
import { useState } from "react";
import { sendData } from "../../utils/form.util";

interface IFormProps{
    children : ReactElement[] | ReactElement
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

    const formRef = useRef(null)
    const [isOverflow,setOverflow] = useState(false)

    return(
        <StyledForm onSubmit={sendData} isOverflow = {isOverflow} ref={formRef}>{props.children}</StyledForm>
    )
}