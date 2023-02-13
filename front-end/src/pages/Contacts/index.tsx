import { useContext, useEffect, useState } from "react";
import { BackgroundForm } from "../../components/BackgroundForm";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { Form } from "../../components/Form";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Tittle } from "../../components/Tittle";
import { StyledBoxSection, StyledDiv, StyledList, StyledSection } from "./style";
import { Generator } from "../../components/Generator";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css"
import { theme } from "../../theme";
import { Modal } from "../../components/Modal";
import { ModalContext } from "../../context/modalContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactSchema } from "../../schemas/contact.schema";
import { Description } from "../../components/Description";
import { Toast } from "../../components/Toast";
import { ListCard } from "../../components/ListCard";
export function Contacts(){

    const {isOpenDelete,isOpenEdit} = useContext(ModalContext)
    const [IsShow,setShow] = useState(false)
    const [isPdf,setPdf] = useState(false)
    
    const {register,handleSubmit,formState : {errors}} = useForm({resolver : yupResolver(contactSchema)})

    return ( 
        <StyledDiv>
            <Toast></Toast>
            {isOpenEdit ? <Modal type="edit"></Modal> : <></> }
            {isOpenDelete ? <Modal type="delete"></Modal> : <></>}
            <Header></Header>
            <Generator></Generator>
            <BackgroundForm>
                    <StyledBoxSection>
                        <StyledSection>
                        <Form type="contact" subtype="create" handleSubmit={handleSubmit}>
                            <Tittle text="Registrar contato"></Tittle>
                            <Input register={{...register("full_name")}} width="100%" text="Nome completo" id="nome" placeholder="Nome do contato"></Input>
                            {errors.full_name?.message && <Description>{errors.full_name.message as string}</Description>}
                            <Input register={{...register("email")}} width="100%" text="Email" id="email" placeholder="Email do contato"></Input>
                            {errors.email?.message && <Description>{errors.email.message as string}</Description>}
                            <Input register={{...register("phone")}} mask="(99)9999-9999" width="100%" text="Telefone" id="telefone" placeholder="Telefone do contato"></Input>
                            {errors.phone?.message && <Description>{errors.phone.message as string}</Description>}
                            <Button isPadding={true} width="50%" to="/Contatos" text="Registrar"></Button>
                        </Form>
                        </StyledSection>
                        <StyledSection>
                            <Button isPadding={true} width="50%" isShow = {IsShow} onClick={()=> setShow((value)=> !value)} text="Listar contatos"></Button>
                                {IsShow 
                                ?
                                <ListCard>
                                    
                                </ListCard>
                                :
                                <Skeleton baseColor={theme.BACKGROUND_FORM} highlightColor={theme.BACKGROUND_INPUT} className="skeleton" containerClassName="box__skeleton" count={2}></Skeleton>
                            }
                        </StyledSection>
                    </StyledBoxSection>
            </BackgroundForm>
        </StyledDiv>
    )
}