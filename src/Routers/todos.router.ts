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
   const {title, description} = req.body
   console.log("from body", title, description)
   res.json("create todo")
})

todosRouter.put("/:id", (req: Request, res:Response)=>{
   const {title, description} = req.body
   console.log("from body", title, description)
   res.json("update todo")
})

todosRouter.patch("/:id", (req: Request, res:Response)=>{
   const {title, description} = req.body
   console.log("from body", title, description)
   res.json("create todo")
})

todosRouter.delete("/:id", (req: Request, res:Response)=>{
   const {title, description} = req.body
   console.log("from body", title, description)
   res.json("create todo")
})

export default todosRouter