 const express=require('express'); // import statement for express
 const mongoose=require('mongoose'); // import statement for mongoose
 const app=express()
 const Product=require('./models/product.model.js'); // imported product.model.js which is in the models foler.
 const productRoute=require('./routes/product.route.js');
 
 //middleware
 app.use(express.json()); // which uses json which is given in postman to test
 app.use(express.urlencoded({extended:false})); // which allows users to send url encoded format to post

//route
app.use("/api/products",productRoute);
 
//just sends a message when we see default local host
 app.get('/',(req,res)=>{
    res.send("Hello from Node API");
 });



 
//database connection string, which will give server is running if connection is established, else we would get connection failed.
 mongoose.connect("mongodb+srv://faizahamedshaik800:Faiz%400502@backenddb.0pr9w.mongodb.net/NodeAPI?retryWrites=true&w=majority&appName=BackendDB").then(()=> {
    console.log("Connected to database!");
    app.listen(3000,()=>{
        console.log('Server is running on port 3000');
     });
 })
 .catch(()=>{
    console.log("Connection Failed");
 });





//  // written get api code , which will send all the products that are available in mongodb, retrieves in json
//  app.get('/api/products', async(req,res)=>{
// try {
//     const products=await Product.find({});
//     res.status(200).json(products);
// } catch (error) {
//     res.status(500).json({message:error.message});
// }
//  });



//  //get API: here I have written a get API , which will retrieve based on the id from mongo db
//  app.get('/api/products/:id',async(req,res)=>{
// try {
//     const{id}=req.params;
//     const product=await Product.findById(id);
//     res.status(200).json(product);
// } catch (error) {
//     res.status(500).json({message:error.message});
// }
//  });



//  //update product by id
//  app.put('/api/products/:id',async(req,res)=>{
// try {
//     const {id}=req.params;
//     const product=await Product.findByIdAndUpdate(id,req.body);
//     if(!product){
//         return res.status(404).json({message:"Product not found"});
//     }
//     const updatedProduct=await Product.findById(id);
//     res.status(200).json(updatedProduct);
// } catch (error) {
//     res.status(500).json({message:error.message});
// }
//  });



 // delete a product by id
//  app.delete('/api/product/:id', async(req,res)=>{
// try {
//     const {id}=req.params;
//     const product=await Product.findByIdAndDelete(id);

//     if(!product){
//         return res.status(404).json({message:"Product not found"});
//     }
//     res.status(200).json({message:"product deleted successfully"});
// } catch (error) {
//     res.status(500).json({message:error.message});
// }
//  });



//  //post API, which will add products to mongodb in the json format
// app.post('/api/products',async(req,res)=>{
//     try {
//         const product = await Product.create(req.body);
//         res.status(200).json(product);
//     } catch (error) {
//         res.status(500).json({message:error.message});
//     }
// });
