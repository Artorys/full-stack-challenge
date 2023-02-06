import { BackgroundForm } from "../../components/BackgroundForm";
import { Input } from "../../components/Input";
import { Tittle } from "../../components/Tittle";
import { Button } from "../../components/Button";
import { Form } from "../../components/Form";

export function Register(){
    return (
            <BackgroundForm>
                <Form>
                    <Tittle text="Registrar-se"></Tittle>
                    <Input text="Nome completo" id="nome" placeholder="Digite seu nome completo"></Input>
                    <Input text="Email" id="email" placeholder="Digite seu email"></Input>
                    <Input text="Senha" id="senha" placeholder="Digite sua senha"></Input>
                    <Input text="Telefone" id="telefone" placeholder="Digite seu telefone"></Input>
                    <Button to="/Contatos" text="Registrar"></Button>
                    <div className="div__description">
                        <p className="description">Não possui conta?</p>
                        <Button to="/Login" text="Logar"></Button></div>
                </Form>
            </BackgroundForm> 
        )
}