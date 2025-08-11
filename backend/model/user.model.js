const mongoose = require("mongoose")

const userModel = new mongoose.Schema({
    name:{
        type:require
    },
    email:{
        type:require
    },
    password:{
        type:require
    }
})

const user = mongoose.model("user", userModel)

export default  user;