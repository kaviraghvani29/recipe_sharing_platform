import { Link } from "react-router-dom";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import { useEffect } from "react";
import { getAllRecipes } from "../../services/recipeService";
import { useEffect, useState } from "react";

const recipes = [
  {
    id: "1",
    title: "Paneer Butter Masala",
    description:
      "Creamy and delicious paneer cooked in a rich tomato and butter gravy.",
    category: "Main Course",
    cookingTime: 30,
    difficulty: "Medium",
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "2",
    title: "Chicken Biryani",
    description:
      "Aromatic basmati rice layered with flavorful spices and tender chicken.",
    category: "Main Course",
    cookingTime: 60,
    difficulty: "Medium",
    image:
      "https://images.unsplash.com/photo-1563379091339-03246963d96c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "3",
    title: "Chocolate Cake",
    description:
      "Soft, moist and rich chocolate cake perfect for any celebration.",
    category: "Dessert",
    cookingTime: 45,
    difficulty: "Easy",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
  },
];

function HomePage() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const data = await getAllRecipes();

        setRecipes(data.recipes);
      } catch (error) {
        console.error("Failed to fetch recipes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div className="home-page">
      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            Discover.
            <br />
            Cook. <span>Share.</span>
          </h1>

          <p>
            Discover delicious recipes, share your favorite dishes, and inspire
            food lovers around the world.
          </p>

          <Link to="/register" className="btn btn-primary">
            Start Sharing Recipes
          </Link>
        </div>
      </section>

      {/* SEARCH */}
      <section className="section">
        <div className="section-title">
          <h2>Find Your Next Recipe</h2>
          <p>Search thousands of delicious ideas.</p>
        </div>

        <div className="search-section">
          <input
            type="text"
            placeholder="Search recipes..."
            className="search-input"
          />

          <button className="btn btn-primary">Search</button>
        </div>
      </section>

      {/* RECIPES */}
      <section className="section">
        <div className="section-title">
          <h2>Popular Recipes</h2>
          <p>Try something delicious today.</p>
        </div>
      </section>

      {loading ? (
        <div className="loader"></div>
      ) : (
        <div className="recipe-grid">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe._id} recipe={recipe} />
          ))}
        </div>
      )}

      {/* CTA */}
      <section className="section">
        <div
          style={{
            width: "min(1000px, 90%)",
            margin: "0 auto",
            padding: "60px 30px",
            textAlign: "center",
            background: "#fff0e6",
            borderRadius: "24px",
          }}
        >
          <h2>Have a Recipe to Share?</h2>

          <p
            style={{
              margin: "12px auto 25px",
              color: "#756b64",
              maxWidth: "600px",
            }}
          >
            Share your favorite recipes with our community and inspire others to
            cook something amazing.
          </p>

          <Link to="/register" className="btn btn-primary">
            Join the Community
          </Link>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
