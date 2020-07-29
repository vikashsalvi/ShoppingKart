/**

 @author    Rashmika Ibrahimpatnam => B00832190

 **/

const express = require("express");
const discountRoute = express.Router();
const discountController = require("../controller/discountController");


discountRoute.get('/getdiscount/:promocode',discountController.getdiscount);

module.exports = discountRoute;
