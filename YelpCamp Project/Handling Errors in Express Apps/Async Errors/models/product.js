const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        require:[true,'name cannot be blank']
    },
    price:{
        type:Number,
        require:true
    },
    category:{
        type: String,
        lowercase: true,
        enum:['fruit','vegetable','dairy']
    }
})

const Product= mongoose.model('Product',productSchema);

module.exports = Product;