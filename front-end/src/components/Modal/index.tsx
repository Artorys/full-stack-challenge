import { Dispatch, SetStateAction, useContext } from "react";
import { StyledDiv, StyledDivButton, StyledDivDelete, StyledDivEdit } from "./style"
import { Form } from "../Form";
import { Input } from "../Input";
import { Tittle } from "../Tittle";
import { Button } from "../Button";
import { ModalContext } from "../../context/modalContext";
import { Description } from "../Description";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { clientSchema, clientUpdateSchema } from "../../schemas/client.schema";
import { remove } from "../../utils/delete.util";
import { useNavigate } from "react-router-dom";

export interface IEditOrDelete{
    delete : boolean;
    edit : boolean;
}

interface IModalProps{
    type : "delete" | "edit",
}

export function Modal(props  : IModalProps){
    
    const {setOpenEdit,setOpenDelete} = useContext(ModalContext)

    const {handleSubmit,register,formState : {errors}} = useForm({resolver : yupResolver(clientUpdateSchema)})

    const navigate = useNavigate()

    if(props.type == "edit"){
        return (
            <StyledDiv>
                <StyledDivEdit>
                    <Form type ="client" subtype="update" handleSubmit={handleSubmit}>
                        <Tittle text="Editar Perfil"></Tittle>
                        <Input register={{...register("full_name")}} text="Nome completo" id="nome" placeholder="Digite seu nome completo"></Input>
                        {errors.full_name?.message && <Description>{errors.full_name.message as string}</Description>}
                        <Input register={{...register("email")}} text="Email" id="email" placeholder="Digite seu email"></Input>
                        {errors.email?.message && <Description>{errors.email.message as string}</Description>}
                        <Input register={{...register("password")}} text="Senha" id="senha" placeholder="Digite sua senha"></Input>
                        {errors.password?.message && <Description>{errors.password.message as string}</Description>}
                        <Input register={{...register("phone")}} mask="(99)9999-9999" text="Telefone" id="telefone" placeholder="Digite seu telefone"></Input>
                        {errors.phone?.message && <Description>{errors.phone.message as string}</Description>}
                        <StyledDivButton>
                            <Button width="25%" text="Editar"></Button>
                            <Button onClick={()=> setOpenEdit(false)} width="25%" text="Cancelar"></Button>
                        </StyledDivButton>
                    </Form>
                </StyledDivEdit>
            </StyledDiv>
        )
    }
    if(props.type == "delete"){
        return(
            <StyledDiv>
                <StyledDivDelete>
                        <div className="box__info">
                            <Tittle text="Deseja deletar o perfil?"></Tittle>
                        </div>
                        <div className="box__button">
                            <Button width = "100%" onClick={async()=>{
                               const response = await remove("client")
                               if(response?.type == "success"){
                                    localStorage.removeItem("$TOKEN")
                                    navigate("/")
                               }
                            }} text="Deletar perfil"></Button>
                            <Button width="100%" onClick={()=>{
                                setOpenDelete(false)
                            }}  text="Cancelar"></Button>
                        </div>
                </StyledDivDelete>
            </StyledDiv>
        )
    }
    return <></>
}