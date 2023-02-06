import { Dispatch, SetStateAction, useContext } from "react";
import { StyledDiv, StyledDivButton, StyledDivDelete, StyledDivEdit } from "./style"
import { Form } from "../Form";
import { Input } from "../Input";
import { Tittle } from "../Tittle";
import { Button } from "../Button";
import { ModalContext } from "../../context/modalContext";

export interface IEditOrDelete{
    delete : boolean;
    edit : boolean;
}

interface IModalProps{
    type : "delete" | "edit",
}

export function Modal(props  : IModalProps){
    
    const {setOpenEdit} = useContext(ModalContext)

    if(props.type == "edit"){
        return (
            <StyledDiv>
                <StyledDivEdit>
                    <Form>
                        <Tittle text="Editar Perfil"></Tittle>
                        <Input text="Nome completo" id="nome" placeholder="Digite seu nome completo"></Input>
                        <Input text="Email" id="email" placeholder="Digite seu email"></Input>
                        <Input text="Senha" id="senha" placeholder="Digite sua senha"></Input>
                        <Input text="Telefone" id="telefone" placeholder="Digite seu telefone"></Input>
                        <StyledDivButton>
                            <Button onClick={()=> setOpenEdit(false)} width="25%" text="Cancelar"></Button>
                            <Button width="25%" text="Enviar"></Button>
                        </StyledDivButton>
                    </Form>
                </StyledDivEdit>
            </StyledDiv>
        )
    }
    if(props.type == "delete"){
        return(
            <StyledDivDelete>

            </StyledDivDelete>
        )
    }
    return <></>
}