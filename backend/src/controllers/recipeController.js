const Recipe = require("../models/recipeModel");

exports.createRecipe = async (req, res) => {
  try {
    const {
      title,
      description,
      ingredients,
      steps,
      category,
      cookingTime,
      serving,
      difficulty,
    } = req.body;

    if (
      !title ||
      !description ||
      !ingredients ||
      !steps ||
      !category ||
      !cookingTime ||
      !servings
    ) {
      return res.status(400).json({
        success: false,
        message: "All Fields are required",
      });
    }

    const recipe = await Recipe.create({
      title,
      description,
      ingredients,
      steps,
      category,
      cookingTime,
      serving,
      difficulty,
      author: req.user.id,
    });

    return res.status(201).json({
      success: true,
      message: "Recipe added successfully",
      recipe,
    });
  } catch (error) {
    return res.status(201).json({
      success: false,
      message: error.message,
    });
  }
};
