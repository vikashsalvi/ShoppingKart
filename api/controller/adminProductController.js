/**

 @author    Hardik Dudhrejia => B00835071

 **/


const express = require('express')
const product = require("../model/productModel");


// This is the API to save a new product to the database. It will check if the new productID already
// exists in the database or not. If the ID already exists, then it will send error response
// else it will save the product to the database and send the success response.
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
        const existingProduct = await product.find({productID:req.body.product_id})
        if(existingProduct.length > 0){
            res.json({"Success":false})
        }
        else{
            const savedItem = await newProduct.save().then(console.log("Product has been saved to the database"))
            res.json({"Success":true})
        }
        
    }catch(err){
        res.json({message:err})
    }
}

// This is the API to delete a product from the database. It will check if the productID exists in the database
// If the productID is valid then it will remove the corresponding product
// Else it will send an error response
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

// This is the API to update an existing product from the database. 
// It will check if the productID exists in the database and
// If the productID is valid then it will update the corresponding product
// Else it will send an error response
const updateProduct = async (req, res) => {
    try{
        console.log(req.body)
        const updatedItem = await product.updateOne({productID:req.body.product_id},
            {$set:{productPrice:req.body.product_price,productQuantity:req.body.product_qty,
            productDescription:req.body.product_description,productURL:req.body.product_img}})
        
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