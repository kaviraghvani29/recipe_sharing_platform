const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const { generateToken } = require("../config/generateToken");

exports.isAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Please Login first",
      });
    }
    console.log(req.cookies);
    console.log(req.cookies.token);
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await User.findById(decoded.id).select("-password");

    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized",
    });
  }
};
