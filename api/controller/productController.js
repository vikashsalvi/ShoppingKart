/**

 @author    Deep Muni => B00828375

 **/

const productModel = require("../model/productModel");

/**
 @function author    Deep Muni => B00828375
 **/

// This controller will help to fetch all the products
const getAllProducts = (req, res) => {
    productModel.find().exec()
        .then(data => {
            res.json({ Status :"Success", data : data});
        })
        .catch(err => {
            console.log("Failure:" + err);
        })
}

/**
 @function author    Deep Muni => B00828375
 **/

// This controller will help to fetch the suggestion
const getSuggestions = (req, res) => {
    productModel.find({"productName" : {$regex : ".*"+ req.params.query +".*", $options: "i"}}).exec()
        .then(data => {
            let finalData = new Set();
            data.map(d => {
                finalData.add(d.productName);
            });
            res.json({ Status :"Success", data : Array.from(finalData)});
        })
        .catch(err => {
            console.log("Failure:" + err);
        })
}

/**
 @function author    Deep Muni => B00828375
 **/

// This controller will help to fetch the result of search
const getSearchedProducts = (req, res) => {
    productModel.find({"productName" : {$regex : ".*"+ req.params.query +".*", $options: "i"}}).exec()
        .then(data => {
            res.json({ Status :"Success", data : data});
        })
        .catch(err => {
            console.log("Failure:" + err);
        })
}

/**
 @function author    Vikash Salvi => B00838074
 **/
const getProductDetails = (req,res) => {
    productModel.find({"productID" : req.params.query}).exec()
        .then(data => {
            res.json({ Status :"Success", data : data});
        })
        .catch(err => {
            console.log("Failure:" + err);
        })
}
/**
 @function author    Vikash Salvi => B00838074
 **/

const getTopProducts = (req,res) => {
    productModel.find().limit(20).exec()
        .then(data => {
            res.json({ Status :"Success", data : data});
        })
        .catch(err => {
            console.log("Failure:" + err);
        })
}

// Exporting the controller

module.exports.getAllProducts = getAllProducts;
module.exports.getSuggestions = getSuggestions;
module.exports.getSearchedProducts = getSearchedProducts;
module.exports.getProductDetails = getProductDetails;
module.exports.getTopProducts = getTopProducts;
