const express = require('express');
const app = express();
const path=require('path');
app.set('view engine', 'ejs');
//setting views directory
app.set('views',path.join(__dirname,'/views'))
app.get('/',(req,res)=>{
    res.render('home')
})
app.listen(3000,()=>{
    console.log("LISTENING ON PORT 3000")
})