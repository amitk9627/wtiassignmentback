const Products = require("../model/product.js");
const createProduct = async (req, res) => {
    const { name, last_name, email, mobileno, project } = req.body;
    const newProduct = {
        name: name,
        last_name: last_name,
        email: email,
        mobileno: mobileno,
        project: project
    }
    try {
        const result = await Products.create(newProduct);
        res.status(201).json({
            status: true,
            message: "product created successfully",
            data: result
        })
    } catch {
        res.status(500).json({
            status: true,
            message: "not created"
        })
    }
};
const deleteProduct = async (req, res) => {
    const {id}=req.params;
    try {
        const delProduct = await Products.deleteOne({ _id: id });
        res.json({
            status: true,
            message: "delete",
            delProduct
        })
    } catch {
        res.status(500).json({
            status: false,
            message: "product deleted failed",
        })
    }

};
const showProduct = async (req, res) => {
    try {
        const products = await Products.find({});
        res.status(200).json({
            status: true,
            message: "show",
            products
        })
    } catch {
        res.status(500).json({
            status: false,
            message: "something went wrong"
        })
    }

}
const updateProduct = async (req, res) => {
    const {id}=req.params;
    const {mobileno}=req.body;
    try{
        await Products.findByIdAndUpdate(id,{mobileno:mobileno});
        res.json({
            status: true,
            message: `mobileno - ${mobileno} updated successfully to product`,
        })
    }catch{
        res.status(500).json({
            staus:false,
            message:"can't update product"
        })
    }
};
module.exports = { deleteProduct, showProduct, updateProduct, createProduct };