const mongoose = require('mongoose');
const DonorSchema = new mongoose.Schema({
    bloodtype:{
        type:String,
        required:true
    },
    blooddonate:{
        type:Number,
        required:true
    },
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
    dob:{
        type:Date,
        required:true
    },
    contact:{
        type:Number,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    gender:{
        type:String,
        required:true
    },
    donated:{
        type:Boolean,
        default:false,
    }
})

module.exports = mongoose.model('BloodDonor',DonorSchema);