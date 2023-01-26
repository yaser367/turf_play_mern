const express = require('express')
const router = express()

const TurfAdminAuthControll = require('../controllers/TurfAdmin-controller/authentication')
const TurfAdminControll = require('../controllers/TurfAdmin-controller/TurfAdminControll')
const Auth = require('../middleware/auth')
const mailControll = require ('../controllers/user-controller/mail-controller')
const turfController = require('../controllers/TurfAdmin-controller/turfController')

/** Post routes */
router.post('/login',TurfAdminAuthControll.handleLogin)
router.post('/register',TurfAdminControll.register)
router.post('/otpVerify',TurfAdminControll.verifyOTP)
router.post('/resentOtp',TurfAdminControll.resendOtp)
router.post('/forgotPassword',TurfAdminControll.forgotPassword)
router.post('/resetPassword',TurfAdminControll.resetPassword)
router.post('/addTurf',turfController.addTurf)


/** Get routes */


module.exports = router;