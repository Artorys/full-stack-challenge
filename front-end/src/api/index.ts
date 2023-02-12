import axios from "axios"

const host = "http://localhost:3000"

export const apiClient = axios.create({
    baseURL : host + "/client"
})
export const apiLogin = axios.create({
    baseURL : host + "/client/login"
})

export const apiPDF = axios.create({
    baseURL : host + "/contact/pdf",
    responseType : "blob"
})

export const apiContact = axios.create({
    baseURL : host + "/contact/"
})