const mongoose = require('mongoose');

const orders = mongoose.Schema({
    username: { type: String, required: true },
    orderItems: { type : Array , "default" : [], required: true },
    grandTotal: { type: Number, required: true }
});

module.exports = mongoose.model("orders", orders);