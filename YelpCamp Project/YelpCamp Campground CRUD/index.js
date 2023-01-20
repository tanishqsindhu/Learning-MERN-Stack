const expres = require('express');
const app =expres();
const path = require('path');

app.set('view engine','ejs');
app.set ('views',path.join(__dirname,'views'))

app.get('/',(req,res)=>{
    res.render('home')
});
app.listen(3000,()=>{
    console.log('Serving on poert 3000')
})