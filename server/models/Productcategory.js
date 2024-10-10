const mongoose = require('mongoose');

const productCategorySchema =new mongoose.Schema({
    CategoryName:{
        type: String,
        default:"others"
    }
})


// Export the model
module.exports = mongoose.model('productcategories',productCategorySchema);
