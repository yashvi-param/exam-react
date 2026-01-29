import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteRecipe } from "../redux/recipeActions";

export default function RecipeDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const recipe = useSelector(state =>
    state.root.recipes.find(r => r.id === parseInt(id))
  );

  if (!recipe) return <div className="container mt-4"><p>Recipe not found</p></div>;

  return (
    <div className="container mt-4">
      <h2>{recipe.title}</h2>
      <div className="card p-4">
        <p><strong>Category:</strong> {recipe.category}</p>
        <p><strong>Diet:</strong> {recipe.diet}</p>
        <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
        <p><strong>Difficulty:</strong> {recipe.difficulty}</p>
        <p><strong>Prep Time:</strong> {recipe.prepTime} mins</p>
        <p><strong>Cook Time:</strong> {recipe.cookTime} mins</p>
        <p><strong>Total Time:</strong> {recipe.totalTime} mins</p>
        <p><strong>Servings:</strong> {recipe.servings}</p>
        <p><strong>Ingredients:</strong></p>
        <p>{recipe.ingredients}</p>
        <p><strong>Instructions:</strong></p>
        <p>{recipe.instructions}</p>
        <p><strong>Date Added:</strong> {recipe.dateAdded}</p>
        <button className="btn btn-danger"
          onClick={() => {
            dispatch(deleteRecipe(recipe.id));
            navigate("/");
          }}>
          Delete
        </button>
      </div>
    </div>
  );
}
