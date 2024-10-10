const mongoose = require('mongoose');

const productSchema =new mongoose.Schema({
    CategoryName:{
        type: String,
        default:"others"
    },
    name:{
        type:String
    },
    image:{
        type:String
    },
    options:[
        {
            maxQunatity:{
                type:Number,
                default:3
            },
            half:{
                type:Number,
                default:100
            },
            full:{
                type:Number,
                default:100
            }
        }
    ],
    description:{
        type:String,
        default:""
    },
    eggMark:{
        type:String,
        enum:['Veg','Non-Veg','Egg','Vegan']
    }
})

// Export the model
module.exports = mongoose.model('product',productSchema);
