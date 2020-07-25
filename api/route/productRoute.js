/**

 @author    Deep Muni => B00828375

 **/

const express = require('express');
const productRoute = express.Router();

// Requiring the controller file
const productController = require('../controller/productController');

/**
 @Route author    Deep Muni => B00828375
 **/
// Route to get all the products
productRoute.get('/getAll', productController.getAllProducts);

// Route to get product name for suggestion
productRoute.get('/getSuggestion/:query', productController.getSuggestions);

// Route to get product list for result page
productRoute.get('/getSearchedProduct/:query', productController.getSearchedProducts);

/**
 @Route author Vikash Salvi => B00838074
 **/
productRoute.get('/getProductDetails/:query', productController.getProductDetails);
productRoute.get('/getTopProducts', productController.getTopProducts);


// Exporting the routes
module.exports = productRoute;
