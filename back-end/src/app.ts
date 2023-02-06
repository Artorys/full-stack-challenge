import Express from "express"
import "reflect-metadata"
import { appRoutes } from "./routes"

const app = Express()

//Set all Request only JSON format
app.use(Express.json())

//Set Routes application
appRoutes(app)

export default app

