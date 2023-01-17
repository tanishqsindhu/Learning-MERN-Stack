const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/shopApp')
    .then(()=>{
    console.log("CONNECTION SUCESSFULL")
    })
.catch((err)=>{
    console.log(err)
})

const personSchema = new mongoose.Schema({
    first: String,
    last: String
})

personSchema.virtual('fullName').get(function (){
    return `${this.first} ${this.last}`
})

const Person = mongoose.model('Person', personSchema)