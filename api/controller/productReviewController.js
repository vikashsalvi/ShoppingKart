/**
 @author    Bharat Bhargava => B00838511
 **/

const productReviewModel = require("../model/productReviewModel");

const postProductreview = (req, res) => {
    var userid = req.body.user_id;
    var productid = req.body.product_id;
    var productrating = req.body.product_rating;
    var productdesc = req.body.product_description;
    console.log(productrating);

    productReviewModel.create({
        userId: userid,
        productId: productid,
        productRating: productrating,
        productDescription: productdesc
    }).then(data => {
        res.json({ Status: "Success", data: data });
    })
        .catch(err => {
            console.log("Failure:" + err);
        });
}

/**
 @function author    Vikash Salvi => B00838074
 **/
const getProductReview = (req,res) => {
    productReviewModel.find({"productId" : req.params.query}).exec()
        .then(data => {
            res.json({ Status :"Success", data : data});
        })
        .catch(err => {
            console.log("Failure:" + err);
        })
}

module.exports.postProductreview = postProductreview;
module.exports.getProductReview = getProductReview;