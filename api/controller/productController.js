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

module.exports.getAllProducts = getAllProducts;
