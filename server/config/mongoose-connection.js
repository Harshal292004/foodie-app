const mongoose= require('mongoose')
const config= require('config')
//mongoose mai development phase chal raha hai ,and it can bee anything 

mongoose
    .connect(`${config.get("MONGODB_URI")}/Foodie`)
    .then(function(){
        console.log('Connection Established successfully !')
    })
    .catch(function(err){
        console.log('Connection Failure')
    })


//provides the entire controll to data base 
module.exports=mongoose.connection
