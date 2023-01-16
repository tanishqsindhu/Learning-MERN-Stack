const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/shopApp')
    .then(()=>{
    console.log("CONNECTION SUCESSFULL")
    })
.catch((err)=>{
    console.log(err)
})

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        maxlength:20
    },
    price:{
        type:Number,
        require:true,
        min:[0,'PRICE MUST BE POSITIVE STUPID!!']
    },
    onSale:{
        type:Boolean,
        default:false
    },
    categories:[String],
    qty:{
        online: {
        type:Number,
        default:0
        },
        inStore: {
            type:Number,
            default:0
        }
    },
    size:{
        type: String,
        enum:['S','M','L']
    }
})
// const Product = mongoose.model('Product',productSchema);
// const bike = new Product ({name:'Mountain Bike',price:500,categories:['cycling']});
// bike.save()
// .then(data=>{
//     console.log("IT WORKED!");
//     console.log(data);
// })
// .catch(err=>{
//     console.log('ERROR');
//     console.log(err);
// })

// Product.findOneAndUpdate({name:'Mountain Bike'},{price:500},{new:true,runValidators:true})
// .then(data=>{
//     console.log("IT WORKED!");
//     console.log(data);
// })
// .catch(err=>{
//     console.log('ERROR');
//     console.log(err);
// })

productSchema.methods.toggleOnSale = function () {
    this.onSale = !this.onSale;
    return this.save();
}

productSchema.methods.addCategory = function (newCat){
    this.categories.push(newCat);
    return this.save();
}
const Product = mongoose.model('Product',productSchema);
const findProduct = async ()=>{
    const foundProduct = await Product.findOne({name:'Mountain Bike'});
    console.log(foundProduct)
    await foundProduct.toggleOnSale();
    console.log(foundProduct)
}
findProduct();