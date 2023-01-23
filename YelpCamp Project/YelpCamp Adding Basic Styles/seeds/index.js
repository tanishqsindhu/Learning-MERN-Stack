const mongoose = require('mongoose');
const campground =require('../models/campground');
const cities= require('./cities');
const {places,descriptors}=require('./seedHelpers');

mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp')
    .then(()=>{
    console.log("MONGO CONNECTION OPEN!!!")
    })
.catch((err)=>{
    console.log("OH NO MONGO CONNECTION ERROR!!!!")
    console.log(err)
})

const seedDB=async()=>{
    await campground.deleteMany({});
    for(let i =0;i<=50;i++){
        const sample = (array)=> array[Math.floor(Math.random()*array.length)]
        const random1000=Math.floor(Math.random()*1000);
        const c = new campground({location:`${cities[random1000].city}, ${cities[random1000].state}`,title:`${sample(descriptors)} ${sample(places)}`}) 
        await c.save();
    }
}
seedDB().then(()=>{
    mongoose.connection.close();
})