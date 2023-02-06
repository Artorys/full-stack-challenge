import { Router } from "express";
import { AuthTokenCheck } from "../middlewares/auth.middleware";
import { ContactController } from "../controllers/contact.controller";

const RouteContact = Router()

RouteContact.get("/client/contact/:id",AuthTokenCheck,ContactController.get)
RouteContact.get("/client/contact",AuthTokenCheck,ContactController.list)
RouteContact.post("/client/contact",AuthTokenCheck,ContactController.post)
RouteContact.patch("/client/contact",AuthTokenCheck,ContactController.patch)
RouteContact.delete("/client/contact",AuthTokenCheck,ContactController.delete)

export default RouteContact