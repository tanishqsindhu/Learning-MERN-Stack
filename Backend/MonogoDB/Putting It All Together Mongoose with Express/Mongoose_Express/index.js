const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const Product =require('./models/product');

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

mongoose.connect('mongodb://127.0.0.1:27017/farmStand')
    .then(()=>{
    console.log("MONGO CONNECTION OPEN!!!")
    })
.catch((err)=>{
    console.log("OH NO MONGO CONNECTION ERROR!!!!")
    console.log(err)
})

app.get('/dogs',(req,res)=>{
res.send('WOOF!!');
})
app.listen(3000,()=>{
    console.log("APP IS LISTENING ON port 3000")
})