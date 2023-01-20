const expres = require('express');
const app =expres();
const path = require('path');
const mongoose = require('mongoose');
const Campground =require('./models/campground');

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
    const campgrounds = await Campground.find({});
    res.render('../campgrounds/index',{campgrounds})
});

app.get('/campground/:id',async(req,res)=>{
    const campground = await Campground.findById(req.params.id);
    res.render('../campgrounds/show',{campground});
})

app.listen(3000,()=>{
    console.log('Serving on port 3000')
})