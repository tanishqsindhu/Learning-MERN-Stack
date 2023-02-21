const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/relationshipDemo')
    .then(()=>{
    console.log("MONGO CONNECTION OPEN!!!")
    })
.catch((err)=>{
    console.log("OH NO MONGO CONNECTION ERROR!!!!")
    console.log(err)
})

const userSchema={
    first:String,
    last:String,
    address:[{
        _id:{id:false},
        street:String,
        city:String,
        state:String,
        country:{
            type:String,
            required:true
        }
    }]
}

const User = mongoose.model('User',userSchema);

const makeUser=async ()=>{
    const u = new User({
        first:'Harry',
        last:'Potter',
    })
    u.address.push({
        street:'123 Seasme St.',
        city:'New York',
        state:'NY',
        country:'USA'
    })
    const res = await u.save();
    console.log(res);
}

const addAddress=async(id)=>{
    const user = await User.findById(id);
    user.address.push({
        street:'99 3rd St',
        city:'New York',
        state:'NY',
        country:'USA'
    })
    const res = await user.save();
    console.log(res);
}
addAddress('63f4fb318286bcb6343267b8');