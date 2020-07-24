/**

 @author    Deep Muni => B00828375

 **/

const express = require('express');
const productRoute = express.Router();
const productController = require('../controller/productController');

productRoute.get('/getAll', productController.getAllProducts);

productRoute.get('/getSuggestion/:query', productController.getSuggestions);

productRoute.get('/getSearchedProduct/:query', productController.getSearchedProducts);

/**
 @Route author Vikash Salvi => B00838074
 **/
productRoute.get('/getProductDetails/:query', productController.getProductDetails);

/**
 @Route author Vikash Salvi => B00838074
 **/
productRoute.get('/getTopProducts', productController.getTopProducts);

module.exports = productRoute;
