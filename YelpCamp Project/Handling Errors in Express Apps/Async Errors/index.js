const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const Product =require('./models/product');
const methodOverride = require('method-override');
const AppError=require('./AppError')

mongoose.connect('mongodb://127.0.0.1:27017/farmStand2')
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

const categories=['vegetable','fruit','dairy']

app.get('/products',wrapAsync(async(req,res,next)=>{
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
}))

app.get('/products/new',(req,res)=>{
    // throw new AppError('NOT ALLOWED',401)
    res.render('products/new',{categories})
})

app.post('/products',wrapAsync(async (req,res,next)=>{
        const newProduct = new Product(req.body);
        await newProduct.save();
        res.redirect(`/products/${newProduct._id}`)
    // res.redirect('/products/show',{newProduct})
}))

function wrapAsync(fn){
    return function(req,res,next){
        fn(req,res,next).catch(e=>next(e))
    }
}

app.get('/products/:id',wrapAsync(async (req,res,next)=>{
        const {id} = req.params;
        const foundItem = await Product.findById(id);
        if(!foundItem){
            return next (new AppError('Product Not Found',404));
        }
        res.render('products/show',{foundItem})
}))

app.get('/products/:id/update',wrapAsync(async (req,res,next)=>{
    const {id} = req.params;
    const foundItem = await Product.findById(id);
    if(!foundItem){
        return next (new AppError('Product Not Found',404));
    }
    res.render('products/update',{foundItem,categories})
}))

app.delete('/products/:id',wrapAsync(async(req,res,next)=>{
        const {id} = req.params;
        const deleteProduct = await Product.findByIdAndDelete(id)
        res.redirect(`/products`)
}))

app.put('/products/:id',wrapAsync(async(req,res)=>{
    const {id} = req.params;
    const product = await Product.findByIdAndUpdate(id,req.body,{runValidators:true,new:true})
    res.redirect(`/products/${product._id}`)
}))

const handleValidationError=err=>{
    consol.dir(err);
    return new AppError(`Validation Failed ${err.message}`,400);
}

app.use((err,req,res,next)=>{
    console.log(err.name);
    if(err.name==='ValidationError')err=handleValidationError(err)
    next(err);
})

app.use((err,req,res,next)=>{
    const {status=500,message='SOMETHING WENT WRONG'}=err;
    res.status(status).send(message);
})

app.listen(3000,()=> {
    console.log("APP IS LISTENING ON port 3000")
})