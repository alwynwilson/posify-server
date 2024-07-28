const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    companyname:{
        type:String,
    },
    address:{
        type:String,
    },
    contactemail:{
        type:String,
    },
    adduser:{
        type:String,
    },
    assignrole:{
        type:String,
    }
})

const users = mongoose.model("users",userSchema)

module.exports = users