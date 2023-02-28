const mongoose = require('mongoose');
const Schema=mongoose.Schema;

const reviewModel = new Schema({
    body:String,
    rating:Number,
})

module.exports=mongoose.model("Review",reviewModel);