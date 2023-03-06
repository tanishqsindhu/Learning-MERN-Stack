const express = require('express');
const app = express();
const router = express.Router();

router.get('/',(req,res)=>{
    res.send('ALL Dogs')
})
router.post('/',(req,res)=>{
    res.send('CREATING Dog')
})
router.get('/:id',(req,res)=>{
    res.send('VIEWING ONE Dog')
})
router.get('/:id/edit',(req,res)=>{
    res.send('EDITING ONE Dog')
})

module.exports = router;