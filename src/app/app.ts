import { request } from "express";

const express = require("express");
const app = express()
const cors = require("cors")
const port = process.env.PORT || 5600


app.use(cors())
app.use(express.json())

app.get("/", (req: Request, res:Response)=>{
   res.json("this is to do server")
})

export default app;