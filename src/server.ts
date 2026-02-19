import app from "./app.js";

let server: any;
const port = 5000

const boostrap = async () => {
    server = app.listen(port, () => {
        console.log(`server is running on port ${port}`)
    })
}

boostrap()