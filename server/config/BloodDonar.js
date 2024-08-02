const mongoose = require('mongoose')
const DonarSchema = mongoose.Schema({
    BloodType:{
        type:String,
        required:true
    },
    Name:{
        type:String,
        required:true
    },
    Dob:{
        type:String,
        required:true
    },
    Phno:{
        type:Number,
        required:true,
        unique:true
    },
    Email:{
        type:String,
        required:true,
        unique:true
    },
    Gender:{
        type:String,
        required:true
    },
    Donated:{
        type:Boolean,
        required:true
    },
    Extra:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('BloodDonors',DonarSchema)