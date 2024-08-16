const mongoose=require('mongoose');
const ContactSchema= new mongoose.Schema({
    fullname:{
        firstname:{
            type:String,
            required:true
        },
        lastname:{
            type:String,
            required:true
        }
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:Number,
        required:true,
        unique:true
    },
    message:{
        type:String,
        required:true
    }
})


module.exports=mongoose.model('Contact',ContactSchema); 
