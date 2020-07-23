const productReviewModel = require("../model/productReviewModel");

const postProductreview = (req, res) => {
    var username = req.body.userName;
    var productname = req.body.productName;
    var userreview = req.body.userReview;
    productReviewModel.create({
        userName: username,
        userReview: userreview,
        productName: productname
    }).then(data => {
        res.json({ Status: "Success", data: data });
    })
        .catch(err => {
            console.log("Failure:" + err);
        });
}

module.exports.postProductreview = postProductreview;
