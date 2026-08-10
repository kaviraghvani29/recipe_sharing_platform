import api from "./api.js";

//get all recipe
export const getAllRecipes = async (params = {}) => {
  const response = await api.get("recipe/getAllRecipes", {
    params,
  });
  return response.data;
};

//get single recipe
export const getRecipe = async (id) => {
  const response = await api.get(`recipe/getRecipe/${id}`);

  return response.data;
};

//create recipe
export const createRecipe = async (recipeData) => {
  const response = await api.post("recipe/addRecipe", recipeData);

  return response.data;
};

//update recipe
export const updateRecipe = async (id, recipeData) => {
  const response = await api.put(`recipe/updateRecipe/${id}`, recipeData);

  return response.data;
};

//delete recipe
export const deleteRecipe = async (id) => {
  const response = await api.delete(`recipe/deleteRecipe/${id}`);

  return response.data;
};
