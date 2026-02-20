import express from "express";
const app = express();
import fs from "fs";
import todosRouter from "./Routers/todos.router.js";
app.use(express.json());
app.use("/todos", todosRouter);
app.get("/", (req, res) => {
    res.json("I learning express with typescript");
});
export default app;
//# sourceMappingURL=app.js.map