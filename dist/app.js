import express from "express";
const app = express();
import fs from "fs";
app.use(express.json());
app.get("/", (req, res) => {
    res.json("I learning express with typescript");
});
app.get("/todos/:title/:body", (req, res) => {
    console.log("from query", req.query);
    console.log("from params", req.params);
    const data = fs.readFileSync("./db/todo.json", { "encoding": "utf-8" });
    res.json(data);
});
app.post("/todos/create-todos", (req, res) => {
    res.json("create to do");
});
export default app;
//# sourceMappingURL=app.js.map