import { Dispatch, ReactElement, SetStateAction, createContext, useState } from "react";

interface IAuthContext{
    isAuth : boolean
    setIsAuth : Dispatch<SetStateAction<boolean>>

}
interface IAuthProviderProps{
    children : ReactElement
}

export const AuthContext = createContext({} as IAuthContext)

export function AuthProvider(props : IAuthProviderProps ){

    const [isAuth,setIsAuth] = useState(false)

    return(
        <AuthContext.Provider value={{isAuth,setIsAuth}}>{props.children}</AuthContext.Provider>
    )
}