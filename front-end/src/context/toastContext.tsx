import { Dispatch, ReactElement, SetStateAction, createContext, useState } from "react";

interface IToast{
    message : string
    active : boolean
    type : string
}

interface IToastContext{
    isToasted : IToast
    setToasted : Dispatch<SetStateAction<IToast>>

}
interface IToastProviderProps{
    children : ReactElement
}

export const ToastContext = createContext({} as IToastContext)

export function ToastProvider(props : IToastProviderProps ){

    const [isToasted,setToasted] = useState({
        message: "",
        active : false,
        type : ""
    })

    return(
        <ToastContext.Provider value={{isToasted,setToasted}}>{props.children}</ToastContext.Provider>
    )
}