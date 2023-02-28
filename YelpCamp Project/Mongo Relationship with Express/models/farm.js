const mongoose = require('mongoose');
const Product = require('./product');
const Product=require('./product');
const {Schema}=mongoose;
const farmSchema = new Schema({
    name:{
        type:String,
        required:[true,'Farm must have a name']
    },
    city:String,
    email:{
        type:String,
        required:[true,'Email required']
    } ,
    products:[
        {
            type:Schema.Types.ObjectId,
            ref:'Product'
        }
    ]
})

farmSchema.post('findOneAndDelete',async function(farm){
    if(farm.product.length){
        const res = await Product.deleteMany({_id:{$in:farm.product}})
    }
})

const Farm = mongoose.model('Farm', farmSchema);
     
module.exports = Farm;