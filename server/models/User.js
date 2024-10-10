const mongoose = require('mongoose');

const userSchema =new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required:true
    },
    fullname: {
        type: String,
        required:true
    },
    age: {
        type: Number,
        min: 15
    },
    email: {
        type: String,
        unique: true,
        required:true
    },
    password: {
        type: String,
        required:true
    },
    contact: {
        type:[Number],
        required:true
    },
    address: [ 
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'address'
        }
    ],
    dateOfBirth: {
        type: Date
    },
    gender: {
        type: String,
        enum: ['Male', 'Female']
    },
    preferences:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'preference'
    },
    cart: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "product"
        }
    ],
    orders:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref: "order"
        }
    ],
    wishlist: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "product"
        }
    ],
    profilePic: {
        type: Buffer
    },
    dateRegistered:{
        type:Date,
        default:Date.now()
    }
});

// Export the model
module.exports = mongoose.model('user',userSchema);
