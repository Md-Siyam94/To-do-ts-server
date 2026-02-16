import app = require("./app");
let server: any;
const port : number = process.env.PORT || 5600

const bootstrap = async() => {
app.listen(port, ()=>{
    console.log(`server is running on port ${port}`)
})
}

bootstrap()