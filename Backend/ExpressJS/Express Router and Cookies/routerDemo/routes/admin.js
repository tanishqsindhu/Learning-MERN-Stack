const express = require('express');
const router = express.Router();

router.use((req,res,next)=>{
    if(req.query.isAdmin){
        next();
    }else{
        res.send('SORRY NOT AN ADMIN!')
    }
})

router.get('/topSeceret',(req,res)=>{
    res.send('THIS IS TOP SECERET')
})
router.get('/deleteeverything',(req,res)=>{
    res.send('OK DELETED ALL')
})

module.exports = router;