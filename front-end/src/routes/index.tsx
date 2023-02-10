import {createBrowserRouter,} from "react-router-dom"
import { Register } from "../pages/Register"
import { Login } from "../pages/Login"
import { Contacts } from "../pages/Contacts"
import { ModalProvider } from "../context/modalContext"
import { ProtectRoute } from "./protect"
import { ToastProvider } from "../context/toastContext"
import {ContactsProvider } from "../components/Tittle/contactsContext"
import { ClientProvider } from "../context/clientContext"

export const Router = createBrowserRouter([
    {
        path : "/*",
        element : <ToastProvider><Register></Register></ToastProvider>
    },
    {
        path : "/login",
        element : <ToastProvider><Login></Login></ToastProvider>
    },
    {
        path : "/contatos",
                
        element :   <ProtectRoute>
                        <ClientProvider>
                            <ToastProvider>
                                <ModalProvider>
                                    <ContactsProvider>
                                        <Contacts></Contacts>
                                    </ContactsProvider>
                                </ModalProvider>
                            </ToastProvider>
                        </ClientProvider>
                    </ProtectRoute>
    }
])