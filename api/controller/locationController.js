const locations = require("../model/locations");

const getTopProductsByLocation = (req,res) => {
    locations.find({city: req.params.city}, {products:1}).exec()
        .then(data => {
            res.json({ Status :"Success", data : data[0].toObject().products});
        })
        .catch(err => {
            console.log("Failure:" + err);
        })
}

const getProductDetailsByLocation = (req,res) => {
    console.log(req.params);
    locations.find({city:req.params.city, "products.productID" : parseInt(req.params.query)},{_id: 0, 'products.$': 1}).exec()
        .then(data => {
            if(data[0]){
                data = data[0].toObject().products
            }
            res.json({ Status :"Success", data : data});
        })
        .catch(err => {
            console.log("Failure:" + err);
        })
}

const getSearchedProductsByLocation = (req, res) => {
    locations.find({city:req.params.city, "products.productName" : {$regex : ".*"+ req.params.query +".*", $options: "i"}},{_id: 0, 'products.$': 1}).exec()
        .then(data => {
            if(data[0]){
                data = data[0].toObject().products
            }
            res.json({ Status :"Success", data : data});
        })
        .catch(err => {
            console.log("Failure:" + err);
        })
}

const getSuggestionsByLocation = (req, res) => {
    locations.find({city:req.params.city},{_id:1}).exec()
    .then(data=>{
        locations.aggregate([ { $match: data[0]}, { $unwind: '$products'}, { $match: {'products.productName': {$regex : ".*"+ req.params.query  +".*", $options: "i"}}}, { $group: {_id: '$_id', products: {$push: '$products.productName'}}} ]).exec()
        .then(data=>{
            if(data[0]){
                data = data.map((prod)=>{return prod.products})[0];
            }
            res.json({Status:"Success",data:data});
        })
        .catch(err=>{
            console.log("Failure:"+err);
        })
    })
    .catch(err =>{
        console.log("Failure:"+err);
    })
}


module.exports.getTopProductsByLocation = getTopProductsByLocation;
module.exports.getProductDetailsByLocation = getProductDetailsByLocation;
module.exports.getSearchedProductsByLocation = getSearchedProductsByLocation;
module.exports.getSuggestionsByLocation = getSuggestionsByLocation;