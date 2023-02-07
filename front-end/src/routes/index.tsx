import {createBrowserRouter,} from "react-router-dom"
import { Register } from "../pages/Register"
import { Login } from "../pages/Login"
import { Contacts } from "../pages/Contacts"
import { ModalProvider } from "../context/modalContext"
import { ProtectRoute } from "./protect"
import { ToastProvider } from "../context/toastContext"

export const Router = createBrowserRouter([
    {
        path : "/",
        element : <Register></Register>
    },
    {
        path : "/Login",
        element : <ToastProvider><Login></Login></ToastProvider>
    },
    {
        path : "/Contatos",
        element : <ProtectRoute><ModalProvider><Contacts></Contacts></ModalProvider></ProtectRoute>
    }
])