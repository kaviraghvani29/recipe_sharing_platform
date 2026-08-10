import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRecipeById } from "../../services/recipeService";

function recipePage() {
  const { id } = useParams;
  const [recipe, setRecipe] = useState(null);
}
