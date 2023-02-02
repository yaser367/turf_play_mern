const express = require("express");
const router = express();

const adminController = require("../controllers/admin-controller/adminController");
const adminAuth = require("../controllers/admin-controller/adminAuth")
const auth = require('../middleware/auth')

/**Get routes */
router.get("/users", adminController.getUserData);
router.get("/turfAdmin", adminController.getTurfAdminData);

/** Put routes */
router.put("/blockUser/:id", adminController.blockUser);
router.put("/blockTurfAdmin/:id",adminController.blockTurfAdmin)

/** Post routes */
router.post("/login",adminAuth.login)

module.exports = router;
