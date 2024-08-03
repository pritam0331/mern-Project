const mongoose = require('mongoose');
const BloodAccepterSchema = mongoose.Schema({
    bloodtype:{
        type:String,
        required:true
    },
    bloodneed:{
        type:Number,
        required:true
    },
    fullname:{fname:{
            type:String,
            required:true
        },
        lname:{
            type:String,
            required:true
        }
    },
    
    dob:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    phoneno:{
        type:Number,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    }
});


module.exports = mongoose.model('BloodAccepter',BloodAccepterSchema);