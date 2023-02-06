import { Dispatch, ReactElement, SetStateAction, createContext, useState } from "react";
import { IEditOrDelete } from "../components/Modal";

interface IModalContext{
    isOpenEdit : boolean
    setOpenEdit : Dispatch<SetStateAction<boolean>>
    isOpenDelete : boolean
    setOpenDelete : Dispatch<SetStateAction<boolean>>
}
interface IModalProviderProps{
    children : ReactElement
}

export const ModalContext = createContext({} as IModalContext)

export function ModalProvider(props : IModalProviderProps ){

    const [isOpenEdit,setOpenEdit] = useState(false)
    const [isOpenDelete,setOpenDelete] = useState(false)

    return(
        <ModalContext.Provider value={{isOpenDelete,setOpenDelete,setOpenEdit,isOpenEdit}}>{props.children}</ModalContext.Provider>
    )
}