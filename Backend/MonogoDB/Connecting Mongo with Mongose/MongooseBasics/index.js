const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/movieAppnode')
    .then(()=>{
    console.log("CONNECTION SUCESSFULL")
    })
.catch((err)=>{
    console.log(err)
})