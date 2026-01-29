import { configureStore } from "@reduxjs/toolkit";
import recipeReducer from "./recipeReducer";

const store = configureStore({
  reducer: {
    root: recipeReducer
  }
});

export default store;
