const express = require('express');
const app = express();
const session = require('express-session');

const sessionOptions = {secret:'thisisnotgoodseceret',resave:false,saveUninitialized:false}
app.use(session(sessionOptions))

app.get('/viewcount',(req,res)=>{
    if(req.session.count){
        req.session.count+=1;
    }else{
        req.session.count=1;
    }
    res.send(`YOU HAVE VIEWED THIS PAGE ${req.session.count} TIMES`)
})

app.get('/register',(req,res)=>{
    const {username = 'Anonymous'}=req.query;
    req.session.username = username;
    res.send(username);
})

app.get('/greet',(req,res)=>{
    const {username} = req.session;
    res.send(`Hello! ${username}`)
})

app.listen(3000,()=>{
    console.log('APP IS RUNNING ON LOCAL HOST 3000')
})