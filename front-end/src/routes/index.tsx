import {createBrowserRouter,} from "react-router-dom"
import { Register } from "../pages/Register"
import { Login } from "../pages/Login"
import { Contacts } from "../pages/Contacts"

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
        element : <Contacts></Contacts>
    }
])