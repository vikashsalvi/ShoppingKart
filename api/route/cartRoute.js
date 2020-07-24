const express = require('express');
const cartRoute = express.Router();
const cartController = require('../controller/cartController');

cartRoute.post('/addToCart', cartController.addToCart);
cartRoute.get('/getOrderDetails', cartController.getOrderDetails);
cartRoute.put('/changeAddress/:username', cartController.changeAddress);
cartRoute.get('/getUserDetails/:username', cartController.getUserDetails);

module.exports = cartRoute;