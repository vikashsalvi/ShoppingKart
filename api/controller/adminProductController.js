const express = require('express')
const productModel = require("../model/productModel");

const adminRouter = express.Router()

adminRouter.get("/",async(req, res)=>{
    try{
    const items = await productModel.find()
    res.json(items)
    }catch(err){
        res.json({message:err})
    }
})

module.exports.adminRouter = adminRouter