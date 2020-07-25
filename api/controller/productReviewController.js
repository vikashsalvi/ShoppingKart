const productReviewModel = require("../model/productReviewModel");

const postProductreview = (req, res) => {
    // var username = req.body.userName;
    // var productname = req.body.productName;
    var productrating = req.body.product_rating;
    var productdesc = req.body.product_description;
    console.log(productrating);

    productReviewModel.create({
        // userName: username,
        // userReview: userreview,
        // productName: productname
        productRating: productrating,
        productDescription:productdesc
    }).then(data => {
        res.json({ Status: "Success", data: data });
    })
        .catch(err => {
            console.log("Failure:" + err);
        });
}

module.exports.postProductreview = postProductreview;
