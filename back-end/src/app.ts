import Express from "express"
import RouteClient from "./routes/client.route"
import RouteContact from "./routes/contact.route"
import "reflect-metadata"

const app = Express()

//Set all Request only JSON format
app.use(Express.json())

//Set Routes application
app.use(RouteClient)
app.use(RouteContact)

export default app

