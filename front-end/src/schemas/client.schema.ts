import * as yup from "yup"

export const clientSchema = yup.object().shape({
    full_name : yup.string().required(),
    email : yup.string().email("Email format not valid").required(),
    password : yup.string().required(),
    phone : yup.string().required().transform((value : string)=>{
        let replace = value.replace(/[()-]/g,"")
        return replace
    })
})
export const loginSchema = yup.object().shape({
    email : yup.string().email("Email format not valid").required(),
    password : yup.string().required(),
})