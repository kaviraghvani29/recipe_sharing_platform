const express = require("express");

const { createRecipe } = require("../controllers/recipeController");
const { isAuthenticated } = require("../middlewares/isauth");

const router = express.Router();

router.post("/", isAuthenticated, createRecipe);

module.exports = router;
