const express= require('express');
const app = express();

const cookieParser = require('cookie-parser');
const { signedCookie } = require('cookie-parser');
app.use(cookieParser('thisismysecret'));


app.get('/',(req,res)=>{
    const{name='noname'}=req.cookies;
    res.send(`HEY ${name}`)
})

app.get('/setname',(req,res)=>{
    res.cookie('name','Steeve chicks');
    res.send('ok send u a cookie')
})

app.get('/signedcookie',(req,res)=>{
    res.cookie('fruit','grape',{signed:true})
    res.send('OK SIGNED UR FRUIT COOKIE')
})

app.get('/verifyfruit',(req,res)=>{
    res.send(req.signedCookies)
})

app.listen(3000,()=>{
    console.log('Serving App on localhost 3000!')
})