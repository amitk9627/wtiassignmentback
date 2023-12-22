const mongoose= require("mongoose");



const productSchema=({
    name:{
        type:String,
        required:true
    },
   last_name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phno:{
        type:String,
        required:true
    },
    project:{
        type:String,
        required:true
    },
});
const Products=mongoose.model("products",productSchema);
module.exports=Products;