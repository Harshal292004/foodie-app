const mongoose = require('mongoose');


const addressScehma=new mongoose.Schema(
    {
        street: String,
        city: String,
        state: String,
        postalCode: String,
        country: String
    }
)


module.exports= mongoose.model('address',addressScehma);
