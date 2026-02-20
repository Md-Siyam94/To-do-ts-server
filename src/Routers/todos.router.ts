import express, { type Request, type Response } from "express"
import fs from "fs"

const todosRouter = express.Router()


todosRouter.get("/", (req: Request, res:Response)=>{
  
//    console.log("from query", req.query)
//    console.log("from params", req.params)
   const data = fs.readFileSync("/db/todo.json", {"encoding": "utf-8"})

   res.json(data)
})

todosRouter.post("/create-todos", (req: Request, res:Response)=>{
   res.json("create todo")
})

export default todosRouter