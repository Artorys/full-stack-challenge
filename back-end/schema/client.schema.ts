import * as yup from "yup"

export const clientSchema = yup.object({
    full_name : yup.string().required("O nome completo é obrigatório"),
    email : yup.string().email("Formato de email incorreto").required("O email é obrigatório"),
    password : yup.string().required("A senha é obrigatória"),
    phone : yup.string().required("O telefone é obrigatório").min(10,"O telefone tem que ter no mínimo 10 digitos").max(10,"O telefone tem que ter no máximo 10 dígitos")
})
export const clientUpdateSchema = yup.object({
    email : yup.string().email("Formato de email incorreto").optional(),
    full_name : yup.string().optional(),
    password : yup.string().optional(),
    phone : yup.string().min(10,"O telefone tem que ter no mínimo 10 digitos").max(10,"O telefone tem que ter no máximo 10 dígitos").optional(),
})
export const loginSchema = yup.object({
    email : yup.string().email("Formato de email incorreto").required("O email é obrigatório"),
    password : yup.string().required(),
})