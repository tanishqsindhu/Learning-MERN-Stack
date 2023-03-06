const express= require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('HEY THERE!')
})

app.get('/setname',(req,res)=>{
    res.cookie('name','Steeve chicks');
    res.send('ok send u a cookie')
})

app.listen(3000,()=>{
    console.log('Serving App on localhost 3000!')
})