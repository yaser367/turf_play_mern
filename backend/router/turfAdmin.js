const express = require('express')
const router = express()

const TurfAdminAuthControll = require('../controllers/TurfAdmin-controller/authentication')
const TurfAdminControll = require('../controllers/TurfAdmin-controller/TurfAdminControll')

router.post('/login',TurfAdminAuthControll.handleLogin)
router.post('/register',TurfAdminControll.register)

module.exports = router;