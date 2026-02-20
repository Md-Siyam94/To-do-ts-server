import express, {} from "express";
import fs from "fs";
const todosRouter = express.Router();
todosRouter.get("/", (req, res) => {
    //    console.log("from query", req.query)
    //    console.log("from params", req.params)
    const data = fs.readFileSync("/db/todo.json", { "encoding": "utf-8" });
    res.json(data);
});
todosRouter.post("/create-todos", (req, res) => {
    res.json("create todo");
});
export default todosRouter;
//# sourceMappingURL=todos.router.js.map