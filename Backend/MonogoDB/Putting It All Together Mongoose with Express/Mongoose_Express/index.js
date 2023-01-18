const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const Product =require('./models/product');
const methodOverride = require('method-override');


mongoose.connect('mongodb://127.0.0.1:27017/farmStand')
    .then(()=>{
    console.log("MONGO CONNECTION OPEN!!!")
    })
.catch((err)=>{
    console.log("OH NO MONGO CONNECTION ERROR!!!!")
    console.log(err)
})

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'));

app.get('/products',async(req,res)=>{
    const products = await Product.find({})
    console.log(products);
    res.render('products/index',{products});
})
app.get('/products/new',(req,res)=>{
    res.render('products/new')
})

app.post('/products',async (req,res)=>{
    const newProduct = new Product(req.body);
    await newProduct.save();
    // res.redirect('/products/show',{newProduct})
    res.redirect(`/products/${newProduct._id}`)
})

app.get('/products/:id',async (req,res)=>{
    const {id} = req.params;
    const foundItem = await Product.findById(id);
    res.render('products/show',{foundItem})
})

app.get('/products/:id/update',async (req,res)=>{
    const {id} = req.params;
    const foundItem = await Product.findById(id);
    res.render('products/update',{foundItem})
})

app.put('/products/:id',async(req,res)=>{
    const {id} = req.params;
    const product = await Product.findByIdAndUpdate(id,req.body,{runValidators:true,new:true})
    res.redirect(`/products/${product._id}`)
})

app.listen(3000,()=>{
    console.log("APP IS LISTENING ON port 3000")
})