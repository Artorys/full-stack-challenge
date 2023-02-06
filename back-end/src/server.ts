import app from "./app";
import { ConnectionDB } from "./data-source";

function startApp(){
    try{
        app.listen(3000,()=>{
            console.log("Express app started! running on http://localhost:3000")
        })
    }
    catch(err){
        console.log("Express app Error!!!",err)
    }
    
}
async function startDB(){
    try{
        await ConnectionDB.initialize()
    }
    catch(err){
        console.log("Error during DB initialization!",err)
    }

}
startDB()
startApp()