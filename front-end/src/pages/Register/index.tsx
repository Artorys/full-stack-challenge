import { BackgroundForm } from "../../components/BackgroundForm";
import { Input } from "../../components/Input";
import { Tittle } from "../../components/Tittle";
import { Button } from "../../components/Button";
import { Form } from "../../components/Form";
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import { clientSchema } from "../../schemas/client.schema";

export function Register(){

        const {handleSubmit,register,formState : {errors},watch} = useForm({resolver : yupResolver(clientSchema)})

    return (
            <BackgroundForm>
                <Form type="register" handleSubmit={handleSubmit}>
                    <Tittle text="Registrar-se"></Tittle>
                    <Input register = {{...register("full_name")}} text="Nome completo" id="nome" placeholder="Digite seu nome completo"></Input>
                    <Input register = {{...register("email")}} text="Email" id="email" placeholder="Digite seu email"></Input>
                    <Input register = {{...register("password")}} text="Senha" id="senha" placeholder="Digite sua senha"></Input>
                    <Input register = {{...register("phone")}} mask="(99)-9999-9999" text="Telefone" id="telefone" placeholder="Digite seu telefone"></Input>
                    <Button text="Registrar"></Button>
                    <div className="div__description">
                        <p className="description">Ja possui conta?</p>
                        <Button to="/login" type="submit" text="Logar"></Button>
                    </div>
                </Form>
            </BackgroundForm> 
        )
}