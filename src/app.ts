import express from "express"
import type { Application,  Request,  Response } from "express"
const app: Application = express()
import fs from "fs"

app.use(express.json())

app.get("/", (req: Request, res:Response)=>{
   res.json("I learning express with typescript")
})
app.get("/todos/:title/:body", (req: Request, res:Response)=>{
   console.log("from query", req.query)
   console.log("from params", req.params)
   const data = fs.readFileSync("./db/todo.json", {"encoding": "utf-8"})
   res.json(data)
})
app.post("/todos/create-todos", (req: Request, res:Response)=>{
   res.json("create to do")
})

export default app
