const mongoose = require('mongoose');

//suprise me theme is to be implemented using lllms or ml models for multi class classification 
const prefrenceSchema=new mongoose.Schema(
    {
        theme: {
            type: String,
            enum: ['dark', 'light','suprise me'],
            default: 'dark'
        },
        dietaryRestrictions:[
            {
                type:String,
                enum:['veg','non-veg','vegan','no restrictions']
            }
        ],
        cuisinePreferences:[
            {
                type:String,
                enum:['italin','chinese','indian','mexican','japanese','thai','american','others']
            }
        ],
        orderPreferences:
        {
            defaultDeliveryAddress:{
                type:mongoose.Schema.Types.ObjectId,
                ref:'address'
            },
            savedPaymentMethods:[{
                type:mongoose.Schema.Types.ObjectId,
                ref:'paymentMethod'
            }]
        },
        user:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'user'
        }
    }
)

module.exports= mongoose.model('preference',prefrenceSchema)