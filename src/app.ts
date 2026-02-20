import express from "express"
import type { Application,  Request,  Response } from "express"
const app: Application = express()
import fs from "fs"
import todosRouter from "./Routers/todos.router.js"

app.use(express.json())



app.use("/todos", todosRouter)


app.get("/", (req: Request, res:Response)=>{
   res.json("I learning express with typescript")
})



export default app
