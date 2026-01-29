import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipes } from "../redux/recipeActions";
import { Link } from "react-router-dom";

export default function RecipeList() {
  const dispatch = useDispatch();
  const recipes = useSelector(state => state.root.recipes);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  return (
    <div className="container mt-4">
      <h3>Recipe List</h3>

      <select className="form-select mb-3"
        onChange={e => setFilter(e.target.value)}>
        <option value="">All</option>
        <option value="Veg">Veg</option>
        <option value="Non-Veg">Non-Veg</option>
      </select>

      {recipes && recipes.length > 0 ? (
        recipes
          .filter(r => !filter || r.category === filter)
          .map(r => (
            <div className="card p-3 mb-3" key={r.id}>
              <h5>{r.title}</h5>
              <p><strong>Category:</strong> {r.category}</p>
              <p><strong>Cuisine:</strong> {r.cuisine}</p>
              <p><strong>Difficulty:</strong> {r.difficulty}</p>
              <p><strong>Cook Time:</strong> {r.cookTime} mins</p>
              <p><strong>Ingredients:</strong> {r.ingredients}</p>
              <Link to={`/details/${r.id}`} className="btn btn-primary btn-sm">
                View Details
              </Link>
            </div>
          ))
      ) : (
        <p>No recipes found. Please start by adding a recipe!</p>
      )}
    </div>
  );
}
