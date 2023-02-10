import { Dispatch, ReactElement, SetStateAction, createContext, useState } from "react";
import { boolean } from "yup";

interface IAuth{
    auth : boolean
    token : string
}
interface IAuthContext{
    isAuth : IAuth
    setIsAuth : Dispatch<SetStateAction<IAuth>>

}
interface IAuthProviderProps{
    children : ReactElement
}

export const AuthContext = createContext({} as IAuthContext)

export function AuthProvider(props : IAuthProviderProps ){

    const [isAuth,setIsAuth] = useState({
        auth : false,
        token : ""
    })

    return(
        <AuthContext.Provider value={{isAuth,setIsAuth}}>{props.children}</AuthContext.Provider>
    )
}