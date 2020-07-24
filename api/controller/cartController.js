const orders = require("../model/orders");
const users = require("../model/users");

const addToCart = (req, res) => {
  const order = new orders({
  username: req.body.username,
  orderItems: req.body.orderItems,
  grandTotal: req.body.grandTotal,
  });

 order.save()
    .then((data) => {
        console.log(data);
      res.json({ Status: "Success", message: "Order confirmed" });
    })
    .catch((err) => {
      res.json({ Status: "Failure", message: err });
      console.log("Failure in adding the data:" + err);
    });
};

const getOrderDetails = (req, res) => {
    orders.find().exec()
        .then(data => {
            console.log(data);
            res.json({ Status :"Success", data : data});
        })
        .catch(err => {
            console.log("Failure:" + err);
        })
};

const changeAddress = (req, res) => {
    users.updateOne({ username: req.params.username }, { $set: { address: req.body.address}}).exec()
    .then(data => {
        console.log(data);
        res.json({Status:"Success", message: "User modified" });
    })
    .catch(err => {
        console.log("Failure in modifying the data:" + err);
    })
}

const getUserDetails = (req, res) =>{
    users.find({ username: req.params.username }).exec()
        .then(data => {
            console.log(data)
            res.json({ Status :"Success", data : data});
        })
        .catch(err => {
            console.log("Failure:" + err);
        })
}

module.exports.addToCart = addToCart;
module.exports.getOrderDetails = getOrderDetails;
module.exports.changeAddress = changeAddress;
module.exports.getUserDetails = getUserDetails;