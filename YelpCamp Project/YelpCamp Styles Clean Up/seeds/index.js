const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');
const Campground = require('../models/campground');

mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp')
    .then(()=>{
    console.log("MONGO CONNECTION OPEN!!!")
    })
.catch((err)=>{
    console.log("OH NO MONGO CONNECTION ERROR!!!!")
    console.log(err)
})

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const sample = array => array[Math.floor(Math.random() * array.length)];


const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 300; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 10;
        const camp = new Campground({
            author:'6409df6bd7ead54475fd3e28',
            geometry: { type: 'Point', coordinates: [cities[random1000].longitude, cities[random1000].latitude] },
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            images: [
                {
                  url: 'https://res.cloudinary.com/dqwbbhysb/image/upload/v1678472436/YelpCamp/r4ausnpaqlaxn4gajrdj.png',
                  filename: 'YelpCamp/r4ausnpaqlaxn4gajrdj',
                },
                {
                  url: 'https://res.cloudinary.com/dqwbbhysb/image/upload/v1678472437/YelpCamp/wrm5ixup1ocwloft9u8c.jpg',
                  filename: 'YelpCamp/wrm5ixup1ocwloft9u8c',
                },
                {
                  url: 'https://res.cloudinary.com/dqwbbhysb/image/upload/v1678472438/YelpCamp/r9qhvbizvdkq5itt2lxe.jpg',
                  filename: 'YelpCamp/r9qhvbizvdkq5itt2lxe',
                }
              ],
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolores vero perferendis laudantium, consequuntur voluptatibus nulla architecto, sit soluta esse iure sed labore ipsam a cum nihil atque molestiae deserunt!',
            price
        })
        await camp.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
})