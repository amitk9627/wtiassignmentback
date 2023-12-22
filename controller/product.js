const Products = require("../model/product.js");
const createProduct = async (req, res) => {
    res.json({
        status: true,
        message:"create"
    })
};
const deleteProduct = async (req, res) => {
    res.json({
        status: true,
        message:"delete"
    })
};
const updateProduct = async (req, res) => {
    res.json({
        status: true,
        message:"update"
    })
};
const showProduct = async (req, res) => {
    res.json({
        status: true,
        message:"show"
    })
}
module.exports={deleteProduct,showProduct,updateProduct,createProduct};