const express = require('express');
const app = express();
const morgan = require('morgan');

// morgan('tiny')

app.use(morgan('dev'))

app.get('/',(req,res)=>{
    res.send('HOME!')
})

app.get('/dogs',(req,res)=>{
    res.send("WOOF WOF!")
})

app.listen(3000,()=>{
    console.log('App is running on localhost:3000')
})