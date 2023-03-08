const express =require('express');
const app = express();
const User= require('./models/user')
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const session = require('express-session');

app.set('view engine','ejs');
app.set('views','views')

mongoose.connect('mongodb://127.0.0.1:27017/authDemo')
    .then(()=>{
    console.log("MONGO CONNECTION OPEN!!!")
    })
.catch((err)=>{
    console.log("OH NO MONGO CONNECTION ERROR!!!!")
    console.log(err)
})

const sessionConfig={secret:'thisisnotgoodsecret',resave:false,saveUninitialized:false}

app.use(express.urlencoded({extended:true}))
app.use(session(sessionConfig))

const requireLogin = (req,res,next)=>{
    if(!req.session.user_id){
        return res.redirect('/login')
    }
    next();
}

app.get('/register',(req,res)=>{
    res.render('register')
})
app.post('/register',async(req,res)=>{
    const {password,username}=req.body;
    const hash = await bcrypt.hash(password,12);
    const user=new User({
        username,
        password:hash
    })
    await user.save()
    req.session.user_id = user._id;
    res.redirect('/')
})

app.get('/login',(req,res)=>{
    res.render('login');
})

app.post('/login',async(req,res)=>{
    const {username,password}=req.body;
    const user = await User.findOne({username});
    const validPassword = await bcrypt.compare(password,user.password);
    if(validPassword){
        req.session.user_id = user._id;
        res.redirect('/secret')
    }else{
        res.redirect('/login')
    }
})

app.post('/logout',(req,res)=>{
    req.session.user_id=null;
    // req.session.destroy();
    res.redirect('/login')
})

app.get('/secret',requireLogin,(req,res)=>{
res.render('seceret')
    // res.send('THIS IS SECRET! You cant see me unless ur login')
})
app.get('/topsecret',requireLogin,(req,res)=>{
res.render('seceret')
    // res.send('THIS IS SECRET! You cant see me unless ur login')
})

app.listen(3000,()=>{
    console.log('App is started on localHost 3000')
})