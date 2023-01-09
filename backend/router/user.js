const express = require("express");
const router = express();

const userControll = require("../controllers/user-controller/auth-controller");
const userAuth = require('../middleware/auth')
const mailControll = require('../controllers/user-controller/mail-controller')

/** Post methods */
router.post("/register", userControll.userRegistration);
router.post("/registerMail",mailControll.registerMail)
router.post("/authenticate",userControll.verifyUser,(req,res)=>res.end());
router.post("/login",userControll.verifyUser,userControll.userLogin);

/** Get methods */
router.get("/user/:username",userControll.getUser);
router.get("/generateOtp",userControll.verifyUser,userAuth.localVariables,userControll.generateOtp);
router.get("/verifyOtp",userControll.verifyUser,userControll.verifyOtp);
router.get("/createResetSession",userControll.createResetSession);

/** Put methods */
router.put("/updateUser",userAuth.isAuth,userControll.updateUser);
router.put("/resetPassword",userControll.verifyUser,userControll.resetPassword);


module.exports = router;