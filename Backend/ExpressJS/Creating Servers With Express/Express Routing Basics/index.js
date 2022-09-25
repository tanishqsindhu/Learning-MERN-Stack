const express =require("express");
const app =express();
let count=0;
// //app.use((req,res)=>{
//     console.log("WE GOT A NEW REQUEST!!!");
//     console.dir(req);
//     count++;
//     //res.send(`HELLO WE GOT YOUR REQUEST, THIS IS YOUR RESPONSE ${count}`)
//     res.send({color:"red"});
// })
app.get('/cats',(req,res)=>{
    res.send("MEOW!!!")
})
app.get("/dogs",(req,res)=>{
    res.send("WOOF!")
})
app.get("/",(req,res)=>{
    res.send("YOU HAVE REACHED HOME!!!")
})
app.listen(3000,()=>{
    console.log("LISTENING ON PORT 3000");
})
app.get("*",(req,res)=>{
    res.send("I DON'T KNOW THAT PATH")
})