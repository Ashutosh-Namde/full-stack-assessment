const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    fullName:{
        required:true,
        type:string
    },
    email:{
        required:true,
        type:string
    },
    password:{
        required:true,
        type:string
    }

})

const User = mongoose.model("User", userSchema)
module.exports = User