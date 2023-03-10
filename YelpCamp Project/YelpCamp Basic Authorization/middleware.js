const { campgroundSchema, reviewSchema } = require('./schemas.js');
const ExpressError = require('./utils/ExpressError');
const Campground = require('./models/campground');

isLoggedIn =(req,res,next)=>{
    if(!req.isAuthenticated()){
        req.session.returnTo=req.originalUrl;
        req.flash('error','You must be signed in first!')
        res.redirect('/login')
    }else{
        next();
    }
}

validateCampground = (req, res, next) => {
    const { error } = campgroundSchema.validate(req.body);
    if (error) {
        const msg = error.details.map(el => el.message).join(',')
        throw new ExpressError(msg, 400)
    } else {
        next();
    }
}


const validateReview = (req, res, next) => {
    const { error } = reviewSchema.validate(req.body);
    if (error) {
        const msg = error.details.map(el => el.message).join(',')
        throw new ExpressError(msg, 400)
    } else {
        next();
    }
}

isAuthor = async(req,res,next)=>{
    const { id } = req.params;
    const campground=await Campground.findById(id);
    if(!campground.author.equals(req.user._id)){
        req.flash('error', 'You Dont have permission to do that!');
        return res.redirect(`/campgrounds/${id}`);
    }else{
        next();
    }
}

module.exports=isLoggedIn;
module.exports=isAuthor;
module.exports=validateCampground;
module.exports=validateReview;