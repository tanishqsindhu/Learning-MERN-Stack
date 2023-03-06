const express= require('express');
const app = express();

const cookieParser = require('cookie-parser');
app.use(cookieParser());


app.get('/',(req,res)=>{
    const{name='noname'}=req.cookies;
    res.send(`HEY ${name}`)
})

app.get('/setname',(req,res)=>{
    res.cookie('name','Steeve chicks');
    res.send('ok send u a cookie')
})

app.listen(3000,()=>{
    console.log('Serving App on localhost 3000!')
})