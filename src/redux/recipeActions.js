import axios from "axios";

const API = "http://localhost:5000/recipes";

export const fetchRecipes = () => dispatch => {
  axios.get(API).then(res =>
    dispatch({ type: "SET_RECIPES", payload: res.data })
  ).catch(error => console.error("Fetch error:", error));
};

export const addRecipe = data => dispatch => {
  axios.post(API, data).then(() => dispatch(fetchRecipes())).catch(error => console.error("Add error:", error));
};

export const updateRecipe = (id, data) => dispatch => {
  axios.put(`${API}/${id}`, data).then(() => dispatch(fetchRecipes())).catch(error => console.error("Update error:", error));
};

export const deleteRecipe = id => dispatch => {
  axios.delete(`${API}/${id}`).then(() => dispatch(fetchRecipes())).catch(error => console.error("Delete error:", error));
};
