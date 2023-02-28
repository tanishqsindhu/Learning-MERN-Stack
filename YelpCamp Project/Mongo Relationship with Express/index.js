const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const Product =require('./models/product');
const methodOverride = require('method-override');
const Farm = require('./models/farm');


mongoose.connect('mongodb://127.0.0.1:27017/farmStand2')
    .then(()=>{
    console.log("MONGO CONNECTION OPEN!!!")
    })
.catch((err)=>{
    console.log("OH NO MONGO CONNECTION ERROR!!!!")
    console.log(err)
})
// Require static assets from public folder
app.use(express.static(path.join(__dirname, 'public')));

// Set 'views' directory for any views 
// being rendered res.render()
app.set('views', path.join(__dirname, 'views'));

// Set view engine as EJS
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'));

const categories=['vegetable','fruit','dairy']

//Farm Routes

app.get('/farms',async(req,res)=>{
    const farms = await Farm.find({});
    res.render('farms/index',{farms})
})

app.get('/farms/new',(req,res)=>{
    res.render('farms/new')
})

app.get('/farms/:id',async(req,res)=>{
    const farm = await Farm.findById(req.params.id).populate('products');
    res.render('farms/show',{farm})
})

app.post('/farms',async(req,res)=>{
    const newFarm = new Farm(req.body)
    await newFarm.save()
    res.render('/farms')
})

app.get('/farms/:id/products/new',async(req,res)=>{
    const id =req.params.id;
    const farm = await Farm.findById(id);
    res.render('products/new',{categories,farm})
})

app.post('/farms/:id/products',async(req,res)=>{
    const {id} =req.params;
    const farm = await Farm.findById(id);
    const {name,price,category}=req.body;
    const product=new Product({name,price,category});
    farm.products.push(product);
    product.farm=farm;
    await farm.save();
    await product.save();
    res.redirect(`/farms/${id}`)
})

// Product Routes
app.get('/products',async(req,res)=>{
    const {category} = req.query;
    if(category){
        const products = await Product.find({ category:category})
        // console.log(products);
        res.render('products/index',{products,category});
    }else{
        const products = await Product.find({})
        // console.log(products); 
        res.render('products/index',{products,category:'All'});
    } 
})
app.get('/products/new',(req,res)=>{
    res.render('products/new',{categories})
})

app.post('/products',async (req,res)=>{
    const newProduct = new Product(req.body);
    await newProduct.save();
    // res.redirect('/products/show',{newProduct})
    res.redirect(`/products/${newProduct._id}`)
})

app.get('/products/:id',async (req,res)=>{
    const {id} = req.params;
    const foundItem = await Product.findById(id).populate('farm','name');
    res.render('products/show',{foundItem})
})

app.get('/products/:id/update',async (req,res)=>{
    const {id} = req.params;
    const foundItem = await Product.findById(id);
    res.render('products/update',{foundItem,categories})
})
app.delete('/products/:id',async(req,res)=>{
    const {id} = req.params;
    const deleteProduct = await Product.findByIdAndDelete(id)
    res.redirect(`/products`)
})
app.put('/products/:id',async(req,res)=>{
    const {id} = req.params;
    const product = await Product.findByIdAndUpdate(id,req.body,{runValidators:true,new:true})
    res.redirect(`/products/${product._id}`)
})

app.listen(3000,()=> {
    console.log("APP IS LISTENING ON port 3000")
})