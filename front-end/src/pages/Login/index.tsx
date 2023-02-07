import { useForm } from "react-hook-form";
import { BackgroundForm } from "../../components/BackgroundForm";
import { Button } from "../../components/Button";
import { Form } from "../../components/Form";
import { Input } from "../../components/Input";
import { Tittle } from "../../components/Tittle";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../schemas/client.schema";
import { useContext, useEffect } from "react";
import { ToastContext } from "../../context/toastContext";
import { Toast } from "../../components/Toast";

export function Login(){

    const {handleSubmit,register,formState} = useForm({resolver : yupResolver(loginSchema)})

    useEffect(()=>{
        console.log(formState)
    })

    return (
        <>
        <Toast message="Login invalido"></Toast>
        <BackgroundForm>
            <Form type="login" handleSubmit={handleSubmit}>
                <Tittle text="Login"></Tittle>
                <Input register={{...register("email")}} id="email" text="Email" placeholder="Digite seu email"></Input>
                <Input register = {{...register("password")}}id="senha" text="Senha" placeholder="Digite sua senha"></Input>
                <Button type="submit" text="Logar"></Button>
                <div className="div__description">
                        <p className="description">Não possui conta?</p>
                        <Button to="/" type="submit" text="Registrar"></Button>
                </div>
            </Form>
        </BackgroundForm>
        </>
    )
}