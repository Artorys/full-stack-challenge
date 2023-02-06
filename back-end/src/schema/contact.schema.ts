import * as yup from "yup"

export const contactSchema = yup.object({
    email : yup.string().email("Email format not valid").notRequired(),
    full_name : yup.string().notRequired(),
    phone : yup.string().max(10).required(),
})
export const contactUpdateSchema = yup.object({
    email : yup.string().email("Email format not valid").optional(),
    full_name : yup.string().optional(),
    phone : yup.string().max(10).optional(),
})