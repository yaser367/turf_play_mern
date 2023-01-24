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
router.post('/registerMail',mailControll.registerMail)
router.post('/addTurf',turfController.addTurf)



/** Get routes */
router.get('/:id',TurfAdminControll.getUser)
router.get('/generateOtp',Auth.localVariables,TurfAdminControll.generateOtp)
router.get('/verifyOtp',TurfAdminControll.verifyOtp)

module.exports = router;