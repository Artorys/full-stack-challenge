import { useContext, useEffect, useState } from "react"
import {StyledHeader,StyledNav} from "./style"
import { ModalContext } from "../../context/modalContext"
import { ClientContext } from "../../context/clientContext"
import { apiClient } from "../../api"
import { IClient } from "../../interfaces/client.interface"
import { AuthContext } from "../../context/authContext"

export function Header(){

    const [IsActiveUD,setActiveUD] = useState(false)
    const [isActiveG,setActiveG] = useState(false)
    const {setOpenDelete,setOpenEdit} = useContext(ModalContext)

    const {client,setClient} = useContext(ClientContext)
    const {isAuth} = useContext(AuthContext)

    useEffect(()=>{
        async function getClient(){
            const token = window.localStorage.getItem("$TOKEN")
            const response = await apiClient.get("",{headers : {Authorization : `Bearer ${token}`}})
            const clientData : IClient = response.data
            const date = clientData.created_at.match(/[0-9]{4}-[0-9]{2}-[0-9]{2}/) as RegExpMatchArray
            const time = clientData.created_at.match(/\d{2}:\d{2}:\d{2}(?!T)/) as RegExpMatchArray
            setClient({full_name : clientData.full_name,email : clientData.email,id : clientData.id,data : date[0],hora : time[0],phone : clientData.phone})
   
        }
        getClient()
    },[isAuth])

    return (
    <StyledHeader>
        <StyledNav>
            <ul >
                <li>
                <div onMouseLeave={()=> {
                        setActiveG(()=> false)
                    }} onMouseOver={()=>{
                    setActiveG(()=> true)
                }}>
                    <a>{client.full_name}</a>
                    {isActiveG
                    ?
                    <div className="dropdown__info">
                    <div className="info__box">
                        <p>Id: {client.id}</p>
                        <p>Email: {client.email}</p>
                        <p>Telefone: {client.phone}</p>
                        <p>Data da criação: {client.data}</p>
                        <p>Hora da criação: {client.hora}</p>
                    </div>
                    </div> 
                    :
                    <></>
                    }
                </div>
                <div onMouseOver={()=>{
                    setActiveUD(()=> true)
                }}>
                    <a>Perfil</a>
                    {IsActiveUD 
                    ?
                    <div onMouseLeave={()=> {
                        setActiveUD(()=> false)
                    }} className="dropdown">
                        <a onClick={()=>{
                            setOpenDelete(false)
                            setOpenEdit((value)=> !value)
                        }}>Editar</a>
                        <a onClick={()=>{
                            setOpenEdit(false)
                            setOpenDelete((value)=> !value)
                        }}>Deletar</a>
                    </div> 
                    :
                    <></>
                    }
                </div>
                </li>
            </ul>
        </StyledNav>
    </StyledHeader>
    )
}