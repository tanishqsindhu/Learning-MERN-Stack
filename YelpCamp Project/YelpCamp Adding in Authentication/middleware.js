const isLoggedIn =(req,res,next)=>{
    if(!req.isAuthenticated()){
        req.session.returnTo=req.originalUrl;
        req.flash('error','You must be signed in first!')
        res.redirect('/login')
    }else{
        next();
    }
}

module.exports=isLoggedIn;