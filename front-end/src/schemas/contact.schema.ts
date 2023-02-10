import * as yup from "yup"

export const contactSchema = yup.object({
    full_name : yup.string().notRequired(),
    email : yup.string().email("Formato de email incorreto").notRequired(),
    phone : yup.string().required("O telefone é obrigatório").transform((value : string)=>{
        let replace = value.replace(/([()_-])+/g,"")
        return replace
    }).min(10,"O telefone tem que ter no mínimo 10 digitos").max(10,"O telefone tem que ter no máximo 10 dígitos")
})
export const contactUpdateSchema = yup.object({
    full_name : yup.string().optional(),
    email : yup.string().email("Formato de email incorreto").optional(),
    phone : yup.string().optional().transform((value : string)=>{
        let replace = value.replace(/[_()-]/g,"")
        return replace
    }).test({test : (value)=>{
        if(value?.match(/[0-9]/g) && value.length != 10){
            return false
        }
        return true
    },message : "O Telefone tem que ter no mínimo 10 digitos"})
})