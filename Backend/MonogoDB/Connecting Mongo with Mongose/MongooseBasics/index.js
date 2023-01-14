const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/movieAppnode')
    .then(()=>{
    console.log("CONNECTION SUCESSFULL")
    })
.catch((err)=>{
    console.log(err)
})
const movieSchema = new mongoose.Schema(
    {
        Title: String,
        Year: Number,
        Score: Number,
        Rating: String
    });
const Movie = mongoose.model('Movie',movieSchema);
const amadeus = new Movie({Title:'Amadeus' ,Year:1986,Score:9.2,Rating:'R'});