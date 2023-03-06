const express = require('express');
const app = express();
const shelterRoutes = require('./routes/shelters')
const DogsRotues = require('./routes/dogs')

app.use('/shelters',shelterRoutes);

app.use('/dogs',DogsRotues);

app.listen(3000,()=>{
    console.log('Serving App on localhost 3000!')
})