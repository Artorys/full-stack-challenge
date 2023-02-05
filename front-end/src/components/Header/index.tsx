import { useState } from "react"
import {StyledHeader,StyledNav} from "./style"

export function Header(){

    const [IsActive,setActive] = useState(false)

    return (
    <StyledHeader>
        <StyledNav>
            <ul>
                <li onMouseLeave={(eve)=> {
                    setActive((value)=> false)
                }} onMouseOver={(eve)=>{
                    setActive((value)=> true)
                }}>
                    <a>Perfil</a>
                    {IsActive 
                    ?
                    <div className="dropdown">
                        <a>Editar</a>
                        <a>Deletar</a>
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