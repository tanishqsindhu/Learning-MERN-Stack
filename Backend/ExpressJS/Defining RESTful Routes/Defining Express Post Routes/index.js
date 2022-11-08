const express = require('express');
const app =express();
app.get('/tacos',(req,res)=>{
    res.send("GET /tacos response")
    console.log("get")
})
app.post('/tacos',(req,res)=>{
    res.send("POST /tacos request")
    console.log("post");
})
app.listen(3000, ()=>{
    console.log("ON PORT 3000!")
})