import { useContext, useState } from "react"
import {StyledHeader,StyledNav} from "./style"
import { ModalContext } from "../../context/modalContext"

export function Header(){

    const [IsActive,setActive] = useState(false)
    const {setOpenDelete,setOpenEdit} = useContext(ModalContext)


    return (
    <StyledHeader>
        <StyledNav>
            <ul >
                <li onMouseOver={()=>{
                    setActive(()=> true)
                }}>
                    <a>Perfil</a>
                    {IsActive 
                    ?
                    <div onMouseLeave={()=> {
                        setActive(()=> false)
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
                </li>
            </ul>
        </StyledNav>
    </StyledHeader>
    )
}