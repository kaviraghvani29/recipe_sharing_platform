const express = require("express");
const {
  register,
  login,
  logout,
  getProfile,
} = require("../controllers/authController");
const { isAuthenticated } = require("../middlewares/isauth");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);
router.get("/myProfile", isAuthenticated, getProfile);

module.exports = router;
