const mongoose = require("mongoose")

const messageSchema = new mongoose.Schema({
messageTo:{
    type:String
},
messageFrom:{
    type:String
},
context:{
type:String
}


})