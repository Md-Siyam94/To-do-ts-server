import express from "express";
const app = express();
app.get("/", (req, res) => {
    res.json("I learning express with typescript");
});
app.get("/todos", (req, res) => {
    res.json("this is to do server");
});
app.post("/todos/create-todos", (req, res) => {
    res.json("create to do");
});
export default app;
//# sourceMappingURL=app.js.map