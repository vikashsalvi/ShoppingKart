/**

 @author    Deep Muni => B00828375

 **/

const express = require('express');
const productRoute = express.Router();
const productController = require('../controller/productController');

productRoute.get('/getAll', productController.getAllProducts);

productRoute.get('/getSuggestion/:query', productController.getSuggestions);

productRoute.get('/getSearchedProduct/:query', productController.getSearchedProducts);

productRoute.get('/getProductDetails/:query', productController.getProductDetails);

productRoute.get('/getTopProducts', productController.getTopProducts);

module.exports = productRoute;
