import { useContext, useEffect } from "react";
import { ToastContext } from "../../context/toastContext";
import { StyledToast } from "./style";

interface IToastProps{
    message : string
}

export function Toast(props : IToastProps){
    const {isToasted,setToasted} = useContext(ToastContext)

    return(
        isToasted ?
        <StyledToast><p>{props.message}</p></StyledToast>
        : <></>
    )
}