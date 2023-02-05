import { BackgroundForm } from "../../components/BackgroundForm";
import { Button } from "../../components/Button";
import { Form } from "../../components/Form";
import { Input } from "../../components/Input";
import { Tittle } from "../../components/Tittle";

export function Login(){
    return (
        <BackgroundForm>
            <Form>
                <Tittle text="Login"></Tittle>
                <Input id="email" text="Email" placeholder="Digite seu email"></Input>
                <Input id="senha" text="Senha" placeholder="Digite sua senha"></Input>
                <Button text="Logar" to="/Contatos"></Button>
            </Form>
        </BackgroundForm>
    )
}