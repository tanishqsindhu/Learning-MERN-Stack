const express = require('express');
const router = express.Router();
const catchAsync = require('../utils/catchAsync');
const { isLoggedIn, isAuthor, validateCampground } = require('../middleware');
const campgrounds=require('../controllers/campgrounds');
const multer=require('multer');
const {storage} = require('../cloudinary')
const upload=multer({storage});
router.route('/')
    .get( catchAsync(campgrounds.index))
    // .post( isLoggedIn, validateCampground, catchAsync(campgrounds.createCampground));
    .post(upload.array('image'),(req,res)=>{
        console.log(req.body,req.files)
        res.send('it worked')
    })

router.get('/new', isLoggedIn, campgrounds.renderNewForm);

router.get('/:id/edit', isLoggedIn, isAuthor, catchAsync(campgrounds.renderEditForm));

router.route('/:id')
    .get(catchAsync(campgrounds.showCampground))
    .put( isLoggedIn, isAuthor, validateCampground, catchAsync(campgrounds.updateCampground))
    .delete( isLoggedIn, isAuthor, catchAsync(campgrounds.deleteCampground));

module.exports = router;