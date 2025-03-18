const express = require("express");
const router=express.Router();
const Product=require("../models/product.model.js");
const {getProducts,getProductById,addProducts,updateProductById,removeProductById}=require("../controllers/product.controller.js");

// add a product
router.post('/',addProducts);
//get all products
router.get('/',getProducts);
//get product by id
router.get('/:id',getProductById);
//update product by id
router.put('/:id',updateProductById);
//delete product by id
router.delete('/:id',removeProductById);



module.exports=router;