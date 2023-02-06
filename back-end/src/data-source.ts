import {DataSource} from "typeorm"
import * as dotenv from "dotenv"
dotenv.config()

export const ConnectionDB = new DataSource({
   type : "postgres",
   entities  : ["src/entities/**"],
   migrations : ["src/migrations/**"],
   url : process.env.DATABASE_URL,
   synchronize: false,
   logging: true,
})