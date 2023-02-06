import Express from "express"
import "reflect-metadata"
import { appRoutes } from "./routes"
import cors from "cors"

const app = Express()

//Set all Request only JSON format
app.use(Express.json())

//Set all cors
app.use(cors())

//Set Routes application
appRoutes(app)

export default app

