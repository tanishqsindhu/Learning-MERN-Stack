const express = require('express');
const app = express();
const session = require('express-session');

app.use(session({secret:'thisisnotgoodseceret'}))

app.get('/viewcount',(req,res)=>{
    if(req.session.count){
        req.session.count+=1;
    }else{
        req.session.count=1;
    }
    res.send(`YOU HAVE VIEWED THIS PAGE ${req.session.count} TIMES`)
})

app.listen(3000,()=>{
    console.log('APP IS RUNNING ON LOCAL HOST 3000')
})