import { Router } from "express";
import { ClientController } from "../controllers/client.controller";
import { AuthTokenCheck } from "../middlewares/auth.middleware";

const RouteClient = Router()

RouteClient.get("/client",AuthTokenCheck,ClientController.get)
RouteClient.post("/client",ClientController.post)
RouteClient.post("/client/login",ClientController.login)
RouteClient.patch("/client",AuthTokenCheck,ClientController.patch)
RouteClient.delete("/client",AuthTokenCheck,ClientController.delete)

export default RouteClient