const express = require("express");
const {
  getProfile,
  changePassword,
  updateProfile,
  deleteProfile,
} = require("../controllers/userController");
const { isAuthenticated } = require("../middlewares/isauth");

const router = express.Router();

router.get("/myprofile", isAuthenticated, getProfile);
router.put("/passChange", isAuthenticated, changePassword);
router.put("/updateProfile", isAuthenticated, updateProfile);
router.delete("/deleteProfile", isAuthenticated, deleteProfile);

module.exports = router;
