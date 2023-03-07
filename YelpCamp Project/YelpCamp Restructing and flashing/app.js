const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');
const ExpressError = require('./utils/ExpressError');

const campgrounds=('./routes/campgrounds');
const reviews=('./routes/reviews')

mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp')
    .then(()=>{
    console.log("MONGO CONNECTION OPEN!!!")
    })
.catch((err)=>{
    console.log("OH NO MONGO CONNECTION ERROR!!!!")
    console.log(err)
})

const app =express();

app.engine('ejs',ejsMate);
app.set('view engine','ejs');
app.set ('views',path.join(__dirname,'views'));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));


app.get('/',(req,res)=>{
    res.render('home')
}); 

app.use('/campgrounds',campgrounds);
app.use('/campgrounds/:id/reviews',reviews);

app.all('*',(req,res,next)=>{
next(new ExpressError('Page Not Found',404))
})

app.use((err,req,res,next)=>{
    const {statusCode=500}=err;
    if(!err.message) err.message ='Oh no, Something Went Wrong'
res.status(statusCode).render('error', {err});
})

app.listen(3000,()=>{ 
    console.log('Serving on port 3000')
})