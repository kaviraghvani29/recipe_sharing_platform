import { Link } from "react-router-dom";

function RecipeCard({ recipe }) {
  return (
    <div className="recipe-card">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="recipe-card-image"
      />

      <div className="recipe-card-content">
        <span className="recipe-category">{recipe.category}</span>

        <h3>{recipe.title}</h3>

        <p>{recipe.description}</p>

        <p style={{ marginTop: "12px" }}>
          ⏱ {recipe.cookingTime} min &nbsp; • &nbsp;
          {recipe.difficulty}
        </p>

        <Link
          to={`/recipe/${recipe._id}`}
          className="btn btn-secondary"
          style={{
            marginTop: "18px",
            width: "100%",
          }}
        >
          View Recipe
        </Link>
      </div>
    </div>
  );
}

export default RecipeCard;
