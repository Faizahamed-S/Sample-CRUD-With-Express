const Product=require('../models/product.model.js');

 // written get api code , which will send all the products that are available in mongodb, retrieves in json
const getProducts= async(req,res)=>{
    try {
        const products=await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
};

//get API: here I have written a get API , which will retrieve based on the id from mongo db
const getProductById=async(req,res)=>{
    try {
        const{id}=req.params;
        const product=await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
};


 //update product by id
const updateProductById=async(req,res)=>{
    try {
        const {id}=req.params;
        const product=await Product.findByIdAndUpdate(id,req.body);
        if(!product){
            return res.status(404).json({message:"Product not found"});
        }
        const updatedProduct=await Product.findById(id);
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
};


 //post API, which will add products to mongodb in the json format
const addProducts=async(req,res)=>{
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
};

// delete a product by id
const removeProductById=async(req,res)=>{
    try {
        const {id}=req.params;
        const product=await Product.findByIdAndDelete(id);
    
        if(!product){
            return res.status(404).json({message:"Product not found"});
        }
        res.status(200).json({message:"product deleted successfully"});
    } catch (error) {
        res.status(500).json({message:error.message});
    }
};




module.exports={
    getProducts, getProductById, updateProductById, addProducts, removeProductById
}