const express = require('express');
const app = express();
const morgan = require('morgan');
const AppError=require('./AppError')
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

const verifyPassword = (req,res,next)=>{
    const {password}=req.query;
    if(password==='chickennugget'){
        next();
    }
    // res.send('SORRY YOU NEED A PASSSWORD!!!!')
    throw new AppError('Password required!',401)
}
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

app.get('/secret',verifyPassword,(req,res)=>{
    res.send("NEVER TELL A SECRET")
})

app.get('/admin',(req,res)=>{
    throw new AppError('You are not admin',403)
})

app.get('/error',(req,res)=>{
    chicken.fly();
})

// app.use((req,res)=>{
//     res.status(404).send('NOT FOUND');
// })

// app.use((err,req,res,next)=>{
//     console.log("*************************************")
//     console.log("****************ERROR****************")
//     console.log("*************************************")
//     console.log(err)
//     next(err)
// })

app.use((err,req,res,next)=>{
    const{status = 500, message='Something Went Wrong'}=err;
    res.status(status).send(message)
})


app.listen(3000,()=>{
    console.log('App is running on localhost:3000')
})