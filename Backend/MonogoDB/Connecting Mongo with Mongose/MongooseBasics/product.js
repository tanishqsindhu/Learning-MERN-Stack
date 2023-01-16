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
        min:0
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
    }
})
const Product = mongoose.model('Product',productSchema);
// const bike = new Product ({name:'Tire Pump',price:15,categories:['cycling']});
// bike.save()
// .then(data=>{
//     console.log("IT WORKED!");
//     console.log(data);
// })
// .catch(err=>{
//     console.log('ERROR');
//     console.log(err);
// })

Product.findOneAndUpdate({name:'Tire Pump'},{price:-19.99},{new:true,runValidators:true})
.then(data=>{
    console.log("IT WORKED!");
    console.log(data);
})
.catch(err=>{
    console.log('ERROR');
    console.log(err);
})