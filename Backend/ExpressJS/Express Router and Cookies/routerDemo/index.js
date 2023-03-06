const express = require('express');
const app = express();
const shelterRoutes = require('./routes/shelters')
const dogsRotues = require('./routes/dogs')
const adminRoutes = require('./routes/admin')


app.use('/shelters',shelterRoutes);
app.use('/dogs',dogsRotues);
app.use('/admin',adminRoutes)

app.listen(3000,()=>{
    console.log('Serving App on localhost 3000!')
})