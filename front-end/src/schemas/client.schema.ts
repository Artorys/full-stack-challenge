import * as yup from "yup"

export const clientSchema = yup.object().shape({
    full_name : yup.string().required("O nome completo é obrigatório"),
    email : yup.string().email("Formato de email incorreto").required("O email é obrigatório"),
    password : yup.string().required("A senha é obrigatória"),
    phone : yup.string().required("O telefone é obrigatório").transform((value : string)=>{
        let replace = value.replace(/[()-]/g,"")
        return replace
    }).min(10,"O telefone tem que ter no mínimo 10 digitos").max(10,"O telefone tem que ter no máximo 10 dígitos")
})
export const clientUpdateSchema = yup.object().shape({
    full_name : yup.string().notRequired().optional(),
    email : yup.string().email("Formato de email incorreto").notRequired().optional(),
    password : yup.string().notRequired().optional(),
    phone : yup.string().notRequired().transform((value : string)=>{
        let replace = value.replace(/[_()-]/g,"")
        return replace
    }).test({test : (value)=>{
        if(value?.match(/[0-9]/g) && value.length != 10){
            return false
        }
        return true
    },message : "O Telefone tem que ter no mínimo 10 digitos"})
})
export const loginSchema = yup.object().shape({
    email : yup.string().email("Formato de email incorreto").required("O email é obrigatório"),
    password : yup.string().required("A senha é obrigatória"),
})