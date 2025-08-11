const express = require("express")
const app = express();
const userRoutes = require("./routes/user.routes")



app.listen(8080, ()=>{
    console.log("App is listening at port 8080")
})