import { BackgroundForm } from "../../components/BackgroundForm";
import { Input } from "../../components/Input";
import { Tittle } from "../../components/Tittle";
import { Button } from "../../components/Button";
import { Form } from "../../components/Form";
import { useEffect } from "react";
import { apiClient } from "../../api";
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import { clientSchema } from "../../schemas/register.schema";

export function Register(){

        useEffect(()=>{
           async function api(){
            try{
                const data = await apiClient("",{data : {}})
                console.log(data)
            }
            catch(err){
                console.log("error",err)
            }
           }
           api()
        })
        const {register,formState : {errors}} = useForm({resolver : yupResolver(clientSchema)})
    return (
            <BackgroundForm>
                <Form>
                    <Tittle text="Registrar-se"></Tittle>
                    <Input register={register("full-name")} text="Nome completo" id="nome" placeholder="Digite seu nome completo"></Input>
                    <Input register={register("email")} text="Email" id="email" placeholder="Digite seu email"></Input>
                    <Input register={register("password")} text="Senha" id="senha" placeholder="Digite sua senha"></Input>
                    <Input register={register("phone")} mask="(99)-9999-9999" text="Telefone" id="telefone" placeholder="Digite seu telefone"></Input>
                    <Button to="/Contatos" text="Registrar"></Button>
                    <div className="div__description">
                        <p className="description">Não possui conta?</p>
                        <Button to="/Login" text="Logar"></Button></div>
                </Form>
            </BackgroundForm> 
        )
}