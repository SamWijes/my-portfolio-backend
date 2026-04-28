const express = require('express');
require('dotenv').config()
const app=express();
const PORT=3000;
const path = require('path');
const multer=require('multer');
const { fileURLToPath } = require('url');


const imageRouter = require('./routes/images');



const uploads=multer({dest:'images/'});

// app.use('/images',imageRouter)


app.use('/images',express.static(path.join(__dirname,'images')))

app.listen(PORT,()=>{
    console.log("Server Listening on Port: ",PORT);
    
})



