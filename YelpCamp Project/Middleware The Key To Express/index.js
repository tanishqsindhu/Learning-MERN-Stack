const express = require('express');
const app = express();
const morgan = require('morgan');

// morgan('tiny')

app.use(morgan('dev'))

app.use((req,res,next)=>{
    console.log("THIS IS MY FIRST MIDDLEWARE!!!!")
    return next();
    console.log("THIS IS MY FIRST MIDDLEWARE!!!!  AFTER CALLING NEXT()")
})

app.use((req,res,next)=>{
    console.log("THIS IS MY SECOND MIDDLEWARE!!!!")
    next();
})

app.get('/',(req,res)=>{
    res.send('HOME!')
})

app.get('/dogs',(req,res)=>{
    res.send("WOOF WOOF!")
})

app.listen(3000,()=>{
    console.log('App is running on localhost:3000')
})