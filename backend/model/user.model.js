const mongoose = require("mongoose")

const userModel = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    }
})

const user = mongoose.model("user", userModel)

module.exports = user