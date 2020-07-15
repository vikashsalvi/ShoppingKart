const productModel = require("../model/productModel");

const getAllProducts = (req, res) => {
    productModel.find().exec()
        .then(data => {
            res.json({ Status :"Success", data : data});
        })
        .catch(err => {
            console.log("Failure:" + err);
        })
}

const getSuggestions = (req, res) => {
    productModel.find({"productName" : {$regex : ".*"+ req.params.query +".*", $options: "i"}}).exec()
        .then(data => {
            res.json({ Status :"Success", data : data});
        })
        .catch(err => {
            console.log("Failure:" + err);
        })
}

const getSearchedProducts = (req, res) => {
    productModel.find({"productName" : {$regex : ".*"+ req.params.query +".*", $options: "i"}}).exec()
        .then(data => {
            res.json({ Status :"Success", data : data});
        })
        .catch(err => {
            console.log("Failure:" + err);
        })
}

module.exports.getAllProducts = getAllProducts;
module.exports.getSuggestions = getSuggestions;
module.exports.getSearchedProducts = getSearchedProducts;
