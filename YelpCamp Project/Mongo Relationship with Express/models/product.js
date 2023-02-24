const mongoose = require('mongoose')
const {Schema}=mongoose;
const productSchema = new mongoose.Schema({
    name:{
        type: String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    category:{
        type: String,
        lowercase: true,
        enum:['fruit','vegetable','dairy']
    },
    farm:{
        type:Schema.Types.ObjectId,
        ref:'Farm'
    }
})

const Product= mongoose.model('Product',productSchema);

module.exports = Product;