const express = require('express');
const router = express.Router();
const { productModel,productCategoryModel } = require('../models/index');
router.get("/loadProducts", async (req, res) => {
    try {
        const products = await productModel.find()
        const productsCategory = await productCategoryModel.find()
        res.status(200).json({success: true, products, productsCategory})
    }
    catch(error) {
        console.error("Error:", error);
        res.status(500).json({success: false, error: error.message})
    }
})

module.exports = router;