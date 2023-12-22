const express=require('express');
const cors=require('cors');

const app=express();
const productRoutes=require('./routes/product.js')
app.use(cors());
app.use(express.json());

app.use(productRoutes);

module.exports=app;