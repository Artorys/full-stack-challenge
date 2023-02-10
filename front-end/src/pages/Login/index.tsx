import { useForm } from "react-hook-form";
import { BackgroundForm } from "../../components/BackgroundForm";
import { Button } from "../../components/Button";
import { Form } from "../../components/Form";
import { Input } from "../../components/Input";
import { Tittle } from "../../components/Tittle";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../schemas/client.schema";
import { Toast } from "../../components/Toast";
import { Description } from "../../components/Description";

export function Login(){

    const {handleSubmit,register,formState: {errors}} = useForm({resolver : yupResolver(loginSchema)})

    return (
        <>
        <Toast></Toast>
        <BackgroundForm>
            <Form type="client" subtype="login" handleSubmit={handleSubmit}>
                <Tittle text="Login"></Tittle>
                <Input register={{...register("email")}} id="email" text="Email" placeholder="Digite seu email"></Input>
                {errors.email?.message && <Description>{errors.email.message as string}</Description>}
                <Input register = {{...register("password")}}id="senha" text="Senha" placeholder="Digite sua senha"></Input>
                {errors.password?.message && <Description>{errors.password.message as string}</Description>}
                <Button isPadding={true} type="submit" text="Logar"></Button>
                <div className="div__description">
                        <p className="description">Não possui conta?</p>
                        <Button isPadding={true} to="/" type="submit" text="Registrar"></Button>
                </div>
            </Form>
        </BackgroundForm>
        </>
    )
}