const express = require('express');
require('dotenv').config()
const app=express();
const PORT=3000;
const multer=require('multer');

const imageRouter = require('./routes/images');

const uploads=multer({dest:'images/'});

app.use('/images',imageRouter)




app.listen(PORT,()=>{
    console.log("Server Listening on Port: ",PORT);
    
})



