const express = require("express");

const {
  createRecipe,
  getAllRecipes,
  getRecipeById,
  updateRecipe,
  deleteRecipe,
} = require("../controllers/recipeController");
const { isAuthenticated } = require("../middlewares/isauth");

const router = express.Router();

router.post("/addRecipe", isAuthenticated, createRecipe);
router.get("/getAllRecipes", getAllRecipes);
router.get("/getRecipe/:id", getRecipeById);
router.put("/updateRecipe/:id", isAuthenticated, updateRecipe);
router.delete("/deleteRecipe/:id", isAuthenticated, deleteRecipe);

module.exports = router;
