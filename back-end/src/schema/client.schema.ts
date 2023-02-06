import * as yup from "yup"

export const clientSchema = yup.object({
    email : yup.string().email("Email format not valid").required(),
    full_name : yup.string().required(),
    password : yup.string().required(),
    phone : yup.string().max(10).required(),
})
export const clientUpdateSchema = yup.object({
    email : yup.string().email("Email format not valid").optional(),
    full_name : yup.string().optional(),
    password : yup.string().optional(),
    phone : yup.string().max(10).optional(),
})
export const loginSchema = yup.object({
    email : yup.string().email("Email format not valid").required(),
    password : yup.string().required(),
})