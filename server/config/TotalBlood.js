const mongoose  = require('mongoose')
const BloodQuantity = mongoose.Schema({
    BloodType:{
        type:String,
        required:[true,'BloodType is required']
    },
    Quantity:{
        type:Number,
        required:[true,'Quantity is required'],
        default:0
    }
})

module.exports = mongoose.model('BloodQuantity',BloodQuantity)