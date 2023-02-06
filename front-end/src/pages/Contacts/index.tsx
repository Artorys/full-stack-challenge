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

export function Contacts(){

    const {isOpenDelete,isOpenEdit} = useContext(ModalContext)
    const [IsShow,setShow] = useState(false)

    return (
        <StyledDiv>
            {isOpenEdit ? <Modal type="edit"></Modal> : <></> }
            {isOpenDelete ? <Modal type="delete"></Modal> : <></>}
            <Header></Header>
            <Generator></Generator>
            <BackgroundForm>
                    <StyledBoxSection>
                        <StyledSection>
                        <Form>
                            <Tittle text="Registrar contato"></Tittle>
                            <Input width="100%" text="Nome completo" id="nome" placeholder="Nome do contato"></Input>
                            <Input width="100%" text="Email" id="email" placeholder="Email do contato"></Input>
                            <Input width="100%" text="Telefone" id="telefone" placeholder="Telefone do contato"></Input>
                            <Button width="50%" to="/Contatos" text="Registrar"></Button>
                        </Form>
                        </StyledSection>
                        <StyledSection>
                            <Button width="50%" isShow = {IsShow} onClick={()=> setShow((value)=> !value)} text="Listar contatos"></Button>
                                {IsShow 
                                ?
                                <StyledList>
                                    <Card></Card>
                                </StyledList>
                                :
                                <Skeleton baseColor={theme.BACKGROUND_FORM} highlightColor={theme.BACKGROUND_INPUT} className="skeleton" containerClassName="box__skeleton" count={2}></Skeleton>
                            }
                        </StyledSection>
                    </StyledBoxSection>
            </BackgroundForm>
        </StyledDiv>
    )
}