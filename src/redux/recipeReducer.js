const initialState = {
  recipes: [],
  auth: localStorage.getItem("auth") === "true"
};

const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_RECIPES":
      return { ...state, recipes: action.payload };

    case "LOGIN":
      localStorage.setItem("auth", "true");
      return { ...state, auth: true };

    case "LOGOUT":
      localStorage.removeItem("auth");
      return { ...state, auth: false };

    default:
      return state;
  }
};

export default recipeReducer;
