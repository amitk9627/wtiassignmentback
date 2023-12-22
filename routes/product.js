const router=require('express').Router();

const {showProduct,deleteProduct,createProduct,updateProduct} =require('../controller/product.js')

router.get('/list',showProduct);
router.post('/create',createProduct);
router.delete('/delete/:id',deleteProduct);
router.post('/update/:id',updateProduct);


module.exports=router;