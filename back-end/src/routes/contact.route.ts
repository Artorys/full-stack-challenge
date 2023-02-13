import { Router } from "express";
import { AuthTokenCheck } from "../middlewares/auth.middleware";
import { ContactController } from "../controllers/contact.controller";

const RouteContact = Router()
RouteContact.get("/contact/pdf",AuthTokenCheck,ContactController.pdf)
RouteContact.get("/contact",AuthTokenCheck,ContactController.list)
RouteContact.get("/contact/:id",AuthTokenCheck,ContactController.get)
RouteContact.post("/contact",AuthTokenCheck,ContactController.post)
RouteContact.patch("/contact/:id",AuthTokenCheck,ContactController.patch)
RouteContact.delete("/contact/:id",AuthTokenCheck,ContactController.delete)

export default RouteContact