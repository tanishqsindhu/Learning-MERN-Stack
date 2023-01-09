const express = require('express');
const app =express();
const path =require('path');

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')
const comments =[
    {
        username :'Todd',
        comment:'lol that is so funny!'
    },
    {
        username :'Skyler',
        comment:'I like to go birdwatching with my dog'
    },
    {
        username :'Sk8erBoi',
        comment:'Plz delete your account, Todd'
    },
    {
        username :'onlysayswoof',
        comment:'woof woof woof'
    },
]

app.get('/comments',
(req,res)=>{
res.render('comments/index',{comments})
})

app.get('/comments/new',(req,res)=>{
    res.render('comments/new')
})

app.post('/comments',(req,res)=>{
    const{username,comment}=req.body;
    comments.push({username,comment})
    res.redirect('/comments')
})

app.get('/tacos',(req,res)=>{
    res.send("GET /tacos response")
    console.log("get")
})

app.post('/tacos',(req,res)=>{
    const {meat, qty}=req.body;
    res.send(`Ok, here are your ${qty} ${meat} tacos`)
})

app.listen(3000, ()=>{
    console.log("ON PORT 3000!")
})