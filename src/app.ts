import express from "express"
import type { Application,  Request,  Response } from "express"
const app: Application = express()


app.get("/", (req: Request, res:Response)=>{
   res.json("I learning express with typescript")
})
app.get("/todos", (req: Request, res:Response)=>{
   res.json("this is to do server")
})
app.post("/todos/create-todos", (req: Request, res:Response)=>{
   res.json("create to do")
})

export default app
