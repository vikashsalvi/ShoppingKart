/**

 @author    Deep Muni => B00828375

 **/

const mongoose = require('mongoose');

const products = mongoose.Schema({
    productID: { type: String, required: true },
    productName: { type: String, required: true },
    productPrice: { type: String, required: true }
});

module.exports = mongoose.model("products", products);
