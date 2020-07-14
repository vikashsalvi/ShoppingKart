const express = require('express');
const productRoute = express.Router();
const productController = require('../controller/productController');

productRoute.get('/', productController.getAllProducts);

module.exports = productRoute;
