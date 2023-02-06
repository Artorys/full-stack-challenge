import {createBrowserRouter,} from "react-router-dom"
import { Register } from "../pages/Register"
import { Login } from "../pages/Login"
import { Contacts } from "../pages/Contacts"
import { ModalProvider } from "../context/modalContext"

export const Router = createBrowserRouter([
    {
        path : "/",
        element : <Register></Register>
    },
    {
        path : "/Login",
        element : <Login></Login>
    },
    {
        path : "/Contatos",
        element : <ModalProvider><Contacts></Contacts></ModalProvider>
    }
])