const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

mongoose.connect('mongodb://127.0.0.1:27017/movieAppnode')
    .then(()=>{
    console.log("CONNECTION SUCESSFULL")
    })
.catch((err)=>{
    console.log(err)
})

app.get('/dogs',(req,res)=>{
res.send('WOOF!!');
})
app.listen(3000,()=>{
    console.log("APP IS LISTENING ON port 3000")
})