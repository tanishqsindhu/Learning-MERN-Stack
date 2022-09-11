const express =require("express");
const app =express();
let count=0;
app.use((req,res)=>{
    console.log("WE GOT A NEW REQUEST!!!");
    console.dir(req);
    count++;
    //res.send(`HELLO WE GOT YOUR REQUEST, THIS IS YOUR RESPONSE ${count}`)
    res.send({color:"red"});
})
app.listen(3000,()=>{
    console.log("LISTENING ON PORT 3000");
})