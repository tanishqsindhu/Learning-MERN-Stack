const expres = require('express');
const app =expres();
const path = require('path');
const mongoose = require('mongoose');
const campground =require('./models/campground');

mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp')
    .then(()=>{
    console.log("MONGO CONNECTION OPEN!!!")
    })
.catch((err)=>{
    console.log("OH NO MONGO CONNECTION ERROR!!!!")
    console.log(err)
})

app.set('view engine','ejs');
app.set ('views',path.join(__dirname,'views'))

app.get('/',(req,res)=>{
    res.render('home')
});

app.get('/campgrounds',async(req,res)=>{
    const campgrounds = await campground.find({});
    res.render('../campgrounds/index',{campgrounds})
});

app.listen(3000,()=>{
    console.log('Serving on port 3000')
})