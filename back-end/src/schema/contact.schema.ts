import * as yup from "yup"

export const contactSchema = yup.object({
    full_name : yup.string().notRequired(),
    email : yup.string().email("Formato de email incorreto").notRequired(),
    phone : yup.string().required("O telefone é obrigatório").min(10,"O telefone tem que ter no mínimo 10 digitos").max(10,"O telefone tem que ter no máximo 10 dígitos")
})
export const contactUpdateSchema = yup.object({
    email : yup.string().email("Formato de email incorreto").optional(),
    full_name : yup.string().optional(),
    phone : yup.string().min(10,"O telefone tem que ter no mínimo 10 digitos").max(10,"O telefone tem que ter no máximo 10 dígitos").optional(),
})