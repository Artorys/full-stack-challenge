import { Dispatch, ReactElement, SetStateAction, createContext, useState } from "react";

interface IToastContext{
    isToasted : boolean
    setToasted : Dispatch<SetStateAction<boolean>>

}
interface IToastProviderProps{
    children : ReactElement
}

export const ToastContext = createContext({} as IToastContext)

export function ToastProvider(props : IToastProviderProps ){

    const [isToasted,setToasted] = useState(false)

    return(
        <ToastContext.Provider value={{isToasted,setToasted}}>{props.children}</ToastContext.Provider>
    )
}