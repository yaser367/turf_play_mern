const mongoose = require('mongoose')

const turfAdminSchema = mongoose.Schema({
    AdminName:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require
    },
    isVerified:{
        type:String,
        default:false
    },
    refreshToken:[String]
})

module.exports = mongoose.model('TurfAdmin', turfAdminSchema)