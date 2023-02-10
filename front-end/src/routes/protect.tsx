import { ReactElement, useContext } from "react";
import { AuthContext } from "../context/authContext";
import { Navigate } from "react-router-dom";

interface IProtectRouteProps{
    children : ReactElement
}

export function ProtectRoute(props : IProtectRouteProps){
    const {isAuth} = useContext(AuthContext)

    return isAuth.auth ? props.children : 
    <Navigate to={"/login"}></Navigate>
}