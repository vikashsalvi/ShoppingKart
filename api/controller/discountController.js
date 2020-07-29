/**

 @author    Rashmika Ibrahimpatnam => B00832190

 **/

//load the model
const Discount = require("../model/discountModel");

//get request for specific promo code
const getdiscount = (req, res) => {
    console.log("______________")
    console.log(req.params.promocode)
    Discount.find({ promocode: req.params.promocode }).exec()
    .then(data => {
        console.log("^^^^^^^^^^^")
        console.log(data);
        res.json({ Status :"Success", data : data});
    })
    .catch(err => {
        console.log("Failure:" + err);
    })
}


module.exports.getdiscount = getdiscount;