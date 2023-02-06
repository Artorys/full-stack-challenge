import * as yup from "yup"

export const clientSchema = yup.object({
    email : yup.string().email("Email format not valid").required(),
    full_name : yup.string().required(),
    password : yup.string().required(),
    phone : yup.string().max(10).required(),
})
export const loginSchema = yup.object({
    email : yup.string().email("Email format not valid").required(),
    password : yup.string().required(),
})