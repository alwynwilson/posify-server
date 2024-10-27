const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    id:{
        type:Number,
        required:true,
        unique:true
    },
    productName:{
        type:String,
        required:true
    },
    maxRetailPrice:{
        type:Number,
        required:true
    },
    cost:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    }
})

const products = mongoose.model("products",productSchema)

module.exports = products