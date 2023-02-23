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

const userSchema=Schema({
    username:String,
    age:Number
});

const tweetSchema=Schema({
    text:String,
    likes:Number,
    user:[{type: Schema.Types.ObjectId,ref:'User'}]
})

const User=mongoose.model('User',userSchema);
const Tweet = mongoose.model('Tweets',tweetSchema);

// const makeTweet=async()=>{
//     const user = await User.findOne({username:'chickenfan99'});
//     const tweet1=new Tweet({text:'bock bock bock my chicken make noises',likes:11200});
//     tweet1.user=user;
//     user.save();
//     tweet1.save();
// }

// makeTweet();

const findTweets=async()=>{
    const t = await Tweet.findOne({}).populate('user')
    console.log(t);
}

findTweets()