const mongoose = require('mongoose');
const BloodTestSchema = new mongoose.Schema({
    fullname:{
        fname:{
            type:String,
            required:true
        },
        lname:{
            type:String,
            required:true
        }
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phno:{
        type:Number,
        required:true,
        unique:true
    },
    prefDate:{
        type:Date,
        required:true
    },
    appTime:{
        type:String,
        required:true
    },
    addComment:{
        type:String
    }
})

module.exports = mongoose.model('BloodTest',BloodTestSchema);