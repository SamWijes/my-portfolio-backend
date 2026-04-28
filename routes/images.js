const express = require('express');
const { getProjectImage } = require('../controller/imageController');
const Routes=express.Router()

Routes.post('/',getProjectImage)


module.exports=Routes;