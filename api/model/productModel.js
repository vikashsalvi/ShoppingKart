/**

 @author    Deep Muni => B00828375

 **/

const mongoose = require('mongoose');

const products = mongoose.Schema({
    productID: { type: Number, required: true },
    productName: { type: String, required: true },
    productPrice: { type: String, required: true },
    productBrand: {type: String, required: true},
    productQuantity: {type: Number, required: true},
    productURL: {type: String, required: true},
    productDescription: {type: String, required: true},
});

module.exports = mongoose.model("products", products,"products");
