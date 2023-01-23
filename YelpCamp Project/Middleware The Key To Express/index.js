const express = require('express');
const app = express();
const morgan = require('morgan');

// morgan('tiny')

app.use(morgan('dev'))

app.use((req,res,next)=>{
    req.requestTime = Date.now();
    console.log(req.method.toUpperCase(),req.path);
    next();
})
app.use('/dogs',(req,res,next)=>{
    console.log("I LOVE DOGS ")
    next();
})

// app.use((req,res,next)=>{
//     console.log("THIS IS MY FIRST MIDDLEWARE!!!!")
//     return next();
//     console.log("THIS IS MY FIRST MIDDLEWARE!!!!  AFTER CALLING NEXT()")
// })

// app.use((req,res,next)=>{
//     console.log("THIS IS MY SECOND MIDDLEWARE!!!!")
//     next();
// })

app.get('/',(req,res)=>{
    res.send('HOME!')
})

app.get('/dogs',(req,res)=>{
    console.log(`REQEUEST DATE: ${req.requestTime}`)
    res.send("WOOF WOOF!")
})

app.use((req,res)=>{
    res.status(404).send('NOT FOUND');
})
app.listen(3000,()=>{
    console.log('App is running on localhost:3000')
})