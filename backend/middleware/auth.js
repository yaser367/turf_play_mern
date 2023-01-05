const jwt = require('jsonwebtoken')

const isAuth = async (req,res,next)=>{
    const token = req.headers.authorization.split(" ")[1]
    
    /**retrive the user details from the logged user */
    const decodedToken = await jwt.verify(token,process.env.JWT_SECRET)

    req.user = decodedToken; 
    
    next();
}

const localVariables = (req,res,next)=>{
    req.app.locals = {
        OTP:null,
        resetSession:false
    }
    next()
}

module.exports ={
    isAuth,
    localVariables
}