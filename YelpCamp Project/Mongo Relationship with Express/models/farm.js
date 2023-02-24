const mongoose = require('mongoose')
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

