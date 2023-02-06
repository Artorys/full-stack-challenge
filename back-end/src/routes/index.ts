import { Express } from "express"
import RouteClient from "./client.route"
import RouteContact from "./contact.route"

export function appRoutes(app: Express){
    app.use(RouteClient)
    app.use(RouteContact)
}