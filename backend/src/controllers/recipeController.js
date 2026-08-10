const Recipe = require("../models/recipeModel");
const User = require("../models/userModel");

exports.createRecipe = async (req, res) => {
  try {
    const {
      title,
      description,
      ingredients,
      steps,
      category,
      cookingTime,
      servings,
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
      servings,
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

exports.getAllRecipes = async (req, res) => {
  try {
    const { search, category } = req.query;

    //pagination
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;

    //skip
    const skip = (page - 1) * limit;

    //build query
    const query = {};

    //search by title or description
    if (search) {
      query.$or = [
        {
          title: {
            $regex: search,
            $options: "i",
          },
        },
        {
          description: {
            $regex: search,
            $options: "i",
          },
        },
      ];
    }

    //filter by category
    if (category) {
      query.category = {
        $regex: `^${category}$`,
        $options: "i",
      };
    }

    // get recipe
    const recipes = await Recipe.find(query)
      .populate("author", "name email")
      .sort({ createdAt: -1 })
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    // total matching recipes
    const totalRecipes = await Recipe.countDocuments(query);

    return res.status(200).json({
      success: true,
      count: recipes.length,
      totalRecipes,
      currentPage: page,
      totalPages: Math.ceil(totalRecipes / limit),
      recipes,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getRecipeById = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id).populate(
      "author",
      "name email",
    );

    if (!recipe) {
      return res.status(404).json({
        success: false,
        message: "recipe not found",
      });
    }

    res.status(200).json({
      success: true,
      recipe,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.updateRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);

    if (!recipe) {
      return res.status(404).json({
        success: false,
        message: "Recipe not found",
      });
    }

    if (recipe.author.toString() !== req.user.id.toString()) {
      return res.status(403).json({
        success: false,
        messgae: "You can change your recipe only",
      });
    }

    const updatedRecipe = await Recipe.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      },
    );

    return res.status(200).json({
      success: true,
      message: "Recipe updated successfully",
      recipe: updatedRecipe,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      mesage: error.message,
    });
  }
};

exports.deleteRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);

    if (!recipe) {
      return res.status(404).json({
        success: false,
        message: "Recie not found",
      });
    }

    if (recipe.author.toString() !== req.user.id.toString()) {
      return res.status(403).json({
        success: false,
        message: "You can delete your recipe only",
      });
    }

    const deletedRecipe = await Recipe.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: " Your Recipe Deleted",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
