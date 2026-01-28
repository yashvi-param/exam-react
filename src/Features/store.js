import { configureStore } from '@reduxjs/toolkit';
import recipeReducer from './recipe/recipeSlice';

export const store = configureStore({
  reducer: {
    recipe: recipeReducer,
  },
});

export default store;