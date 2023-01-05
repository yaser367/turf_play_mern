const mongoose = require('mongoose')


const userSchema = mongoose.Schema({
    username:{
        type:String,
        require:[true,"Username should required"]
    },
    email:{
        type:String,
        require:[true,"email should required"]
        
    },
    password:{
        type:String,
        require:[true,"password should required"]
    },
    firstName:{
        type:String,
    },
    lastName:{
        type:String,
    },
    address:{
        type:String
    },
    mobile:{
        type:Number
    },
    profile:{
        type:String
    }
})

module.exports = mongoose.model("User",userSchema)