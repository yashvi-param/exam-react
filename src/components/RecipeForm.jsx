import { useState } from "react";
import { useDispatch } from "react-redux";
import { addRecipe } from "../redux/recipeActions";
import { useNavigate } from "react-router-dom";

export default function RecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submit = () => {
    if (!title || !ingredients) return alert("All fields required");
    dispatch(addRecipe({
      title,
      ingredients,
      category: "Veg",
      date: new Date().toISOString().split("T")[0]
    }));
    navigate("/");
  };

  return (
    <div className="container mt-4">
      <h3>Add Recipe</h3>
      <input className="form-control mb-2"
        placeholder="Title"
        onChange={e => setTitle(e.target.value)} />
      <textarea className="form-control mb-2"
        placeholder="Ingredients"
        onChange={e => setIngredients(e.target.value)} />
      <button className="btn btn-success" onClick={submit}>Add</button>
    </div>
  );
}
