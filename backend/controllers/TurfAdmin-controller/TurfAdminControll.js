const TurfAdmin = require("../../models/TurfAdmin");
const bycrypt = require("bcrypt");



/** Get user */

const getUser = async (req,res) => {
  try {
    
  } catch (error) {
    
  }
}

/** TurfAdmin Registration */

const register = async (req, res) => {
  try {
    const { AdminName, email, password } = req.body;
    const emailExist = await TurfAdmin.findOne({ email });

    if (emailExist) {
      return res.status(400).send({ error: "Account already exist" });
    } else {
      const hashedPassword = await bycrypt.hash(password, 12);

      const admin = new TurfAdmin({
        AdminName,
        password: hashedPassword,
        email,
      });
      await admin
        .save()
        .then((result) =>
          res.status(201).send({ message: "user Registred successfully" })
        )
        .catch((error) => res.status(500).send({ error }));
    }
  } catch (error) {
        return res.status(500).send(error);
  }
};


const generateOtp = async (req,res) =>{

  req.app.locals.OTP = `${Math.floor(1000 + Math.random() *9000)}`;
  res.status(201).send({code:req.app.locals.OTP})
}


const verifyOtp = async (req,res) =>{
    const {code} = req.query;
    if(parseInt(req.app.locals.OTP) === parseInt(code)){
        req.app.locals.OTP = null; //reset the OTP value
        req.app.locals.resetSession = true; // start session for reset password
        // const Admin = await TurfAdmin.updateOne({})
        return res.status(201).send({message:"verify Successfully"})
        
    }
    return res.status(400).send({error:"Invalid Otp"})
}




module.exports = {
    register,
    generateOtp,
    verifyOtp,
    getUser
}