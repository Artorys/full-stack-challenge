import { useContext, useEffect } from "react";
import { ToastContext } from "../../context/toastContext";
import { StyledToast } from "./style";

export function Toast(){
    const {isToasted,setToasted} = useContext(ToastContext)

    return(
        <>
            {isToasted.active && isToasted.type == "error" ?
            <StyledToast type = "error"><p>{isToasted.message}</p></StyledToast>
            : <></>}
            {isToasted.active && isToasted.type == "success" ? 
            <StyledToast type="success">
                <p>{isToasted.message}</p>
            </StyledToast> 
            : 
            <></>
            }
        </>
    )
}