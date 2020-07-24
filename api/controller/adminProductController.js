/**

 @author    Hardik Dudhrejia => B00835071

 **/


const express = require('express')
const product = require("../model/productModel");

const adminRouter = express.Router()

const saveProduct = async (req, res)=>{
    const newProduct = new product({
        productID: req.body.product_id,
        productName : req.body.product_name,
        productPrice : req.body.product_price,
        productBrand : req.body.product_brand,
        productQuantity : req.body.product_qty,
        productURL : req.body.product_img,
        productDescription : req.body.product_description
    })
    try{
        const savedItem = await newProduct.save().then(console.log("Product has been saved to the database"))
        res.json({"Success":true})
    }catch(err){
        res.json({message:err})
    }
}

const deleteProduct = async (req, res)=>{
    try{
    const removedItem =  await product.deleteOne({productID:req.body.product_id})
    console.log(req.body)
    console.log("Item deleted")
    console.log(removedItem.n)
    if(removedItem.n === 1)
    {
        res.json({"Success":true})
    }
    else{
        res.json({"Success":false})
    }
    }catch(err){
        console.log(err)
    }
}

const updateProduct = async (req, res) => {
    try{
        const updatedItem = await product.updateOne({productID:req.body.product_id},
            {$set:{productPrice:req.body.product_price,productQuantity:req.body.product_qty,
            productDescription:req.body.product_description}})
        
        console.log(req.body)
        console.log(updatedItem)
        
        if(updatedItem.n === 1)
        {
            res.json({"Success":true})
        }
        else{
            res.json({"Success":false})
        }
    }
    catch(err){
        console.log(err)
    }
}

module.exports.saveProduct = saveProduct
module.exports.deleteProduct = deleteProduct
module.exports.updateProduct = updateProduct
