const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const Campground =require('./models/campground');
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');
const expressError = require('./utils/ExpressError');
const catchAsync = require('./utils/catachAsync');
const ExpressError = require('./utils/ExpressError');
const joi = require('joi');

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

app.get('/campgrounds',catchAsync(async(req,res)=>{
    const campgrounds = await Campground.find({});
    res.render('campgrounds/index',{campgrounds})
}));

app.get('/campgrounds/new',(req,res)=>{
    res.render('campgrounds/new');
});

app.get('/campgrounds/:id',catchAsync(async(req,res)=>{
    const campground = await Campground.findById(req.params.id);
    res.render('campgrounds/show',{campground});
}));

app.get('/campgrounds/:id/edit',catchAsync(async(req,res)=>{
    const campground = await Campground.findById(req.params.id);
    res.render('campgrounds/edit',{campground});
}));

app.post('/campgrounds',catchAsync(async(req,res,next)=>{
    // if(!req.body.campground) throw new ExpressError('Invalid Campground Data',400)
    const campgroundSchema = joi.object({
        campground: joi.object({
            title: joi.string().required(),
            price: joi.number().required().min(0),
            image: joi.string().require(),
            description: joi.string().require(),
            location: joi.string().required(),
        }).required()
    })
    const {error}=campgroundSchema.validate(req.bbody);
    if(error){
        const msg =error.details.map(el=>el.message).join(',')
        throw new ExpressError(msg,400)
    }
    const campground = new Campground(req.body.campground);
        await campground.save();
        res.redirect(`/campgrounds/${campground._id}`);
    }));

app.put('/campgrounds/:id',catchAsync(async(req,res)=>{
    const {id} = req.params ;
    const campground = await Campground.findByIdAndUpdate(id,{...req.body.campground},{runValidators:true,new:true})
    res.redirect(`/campgrounds/${campground._id}`);
}));

app.delete('/campgrounds/:id',catchAsync(async(req,res)=>{
    const {id} = req.params;
    await Campground.findByIdAndDelete(id)
    res.redirect(`/campgrounds/`);
}));

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