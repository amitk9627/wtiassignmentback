const express=require('express');
const cors=require('cors');
const productRoutes=require('./controller/product.js')
const app=express();
app.use(cors());
app.use(express.json());
app.use(productRoutes);


module.exports=app;