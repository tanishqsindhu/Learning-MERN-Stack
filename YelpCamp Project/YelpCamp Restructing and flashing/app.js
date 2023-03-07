const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const Campground =require('./models/campground');
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');
const catchAsync = require('./utils/catachAsync');
const ExpressError = require('./utils/ExpressError');
const {campgroundSchema, reviewSchema} = require('./schema');
const Review = require('./models/review');
const catachAsync = require('./utils/catachAsync');

const campgroundRouter=('./routes/campgrounds');
const reviewsRouter=('./routes/reviews')

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

app.use('/campgrounds',campgroundRouter);
app.use('/campgrounds/:id/reviews',reviewsRouter);

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