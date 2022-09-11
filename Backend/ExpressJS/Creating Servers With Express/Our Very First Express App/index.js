const express =require("express");
const app =express();
app.use(()=>{
    console.log("WE GOT A NEW REQUEST!!!");
})
app.listen(3000,()=>{
    console.log("LISTENING ON PORT 3000");
})