const express = require("express");
const router = express();

const adminController = require("../controllers/admin-controller/adminController");

/**Get routes */
router.get("/users", adminController.getUserData);
router.get("/turfAdmin", adminController.getTurfAdminData);

/** Put routes */
router.put("/blockUser/:id",adminController.blockUser)

module.exports = router;
