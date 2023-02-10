import { BackgroundForm } from "../../components/BackgroundForm";
import { Input } from "../../components/Input";
import { Tittle } from "../../components/Tittle";
import { Button } from "../../components/Button";
import { Form } from "../../components/Form";
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import { clientSchema } from "../../schemas/client.schema";
import { useContext, useEffect } from "react";
import { Description } from "../../components/Description";
import { Toast } from "../../components/Toast";
import { ToastContext } from "../../context/toastContext";

export function Register(){

        const {handleSubmit,register,formState : {errors}} = useForm({resolver : yupResolver(clientSchema)})

        const {isToasted} = useContext(ToastContext)

    return (
        <>
            <Toast></Toast>
           <BackgroundForm>
                <Form type="client" subtype="create" handleSubmit={handleSubmit}>
                    <Tittle text="Registrar-se"></Tittle>
                    <Input register = {{...register("full_name")}} text="Nome completo" id="nome" placeholder="Digite seu nome completo"></Input>
                    {errors.full_name?.message && <Description>{errors.full_name.message as string}</Description>}
                    <Input register = {{...register("email")}} text="Email" id="email" placeholder="Digite seu email"></Input>
                    {errors.email?.message && <Description>{errors.email.message as string}</Description>}
                    <Input register = {{...register("password")}} text="Senha" id="senha" placeholder="Digite sua senha"></Input>
                    {errors.password?.message && <Description>{errors.password.message as string}</Description>}
                    <Input register = {{...register("phone")}} mask="(99)-9999-9999" text="Telefone" id="telefone" placeholder="Digite seu telefone"></Input>
                    {errors.phone?.message && <Description>{errors.phone.message as string}</Description>}
                    <Button isPadding={true} text="Registrar"></Button>
                    <div className="div__description">
                        <p className="description">Ja possui conta?</p>
                        <Button isPadding={true} to="/login" type="submit" text="Logar"></Button>
                    </div>
                </Form>
            </BackgroundForm> 
        </>
         
        )
}