const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/relationshipDemo')
    .then(()=>{
    console.log("MONGO CONNECTION OPEN!!!")
    })
.catch((err)=>{
    console.log("OH NO MONGO CONNECTION ERROR!!!!")
    console.log(err)
})

const Schema = mongoose.Schema;

const productSchema=Schema({
    name:String,
    price:Number,
    season:{
        type:String,
        enum:['Spring','Summer','Fall','Winter']
    }
});

const farmSchema=Schema({
    name:String,
    city:String,
    products:[{type: Schema.Types.ObjectId,ref:'Product'}]
})

const Farm = mongoose.model('Farm',farmSchema);
const Product=mongoose.model('Product',productSchema);

// Product.insertMany([
//     {name:'Goddess Melon' , price:4.99,season:'Summer'},
//     {name:'Sugar Baby Watermelon' , price:4.99,season:'Summer'},
//     {name:'Asparagus' , price:3.99,season:'Spring'}
// ])


// const makeFarm= async()=>{
//     const farm = await new Farm({name:'Full Belly Farm', city:'Guinda, CA'});
//     const melon= await Product.findOne({name:'Goddes Melon'});
//     await farm.save();
//     farm.products.push(melon)
// }
// makeFarm();

const addProducts =async()=>{
    const farm = await Farm.findOne({name:'Full Belly Farm'});
    const watermelon = await Product.findOne({name:'Sugar Baby Watermelon'})
    farm.products.push(watermelon)
    await farm.save();
}

Farm.findOne({name:'Full Belly Farm'})
.populate('products')
.then(farm=>console.log(farm))