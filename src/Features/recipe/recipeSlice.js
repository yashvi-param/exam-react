import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:3000/recipes';

export const fetchRecipes = createAsyncThunk(
  'recipe/fetchRecipes',
  async () => {
    const response = await axios.get(API_URL);
    return response.data;
  }
);

export const addRecipe = createAsyncThunk(
  'recipe/addRecipe',
  async (recipe) => {
    const response = await axios.post(API_URL, recipe);
    return response.data;
  }
);

export const updaterecipe = createAsyncThunk(
  'recipe/updaterecipe',
  async (recipe) => {
    const response = await axios.put(`${API_URL}/${recipe.id}`, recipe);
    return response.data;
  }
);

export const deleterecipe = createAsyncThunk(
  'recipe/deleterecipe',
  async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    return id;
  }
);

const initialState = {
  recipes: [],
  loading: false,
  error: null,
  user: null,
};

const recipeSlice = createSlice({
  name: 'recipe',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipes.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.loading = false;
        state.recipes = action.payload;
      })
      .addCase(fetchRecipes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addRecipe.fulfilled, (state, action) => {
        state.recipes.push(action.payload);
      })
      .addCase(updaterecipe.fulfilled, (state, action) => {
        const index = state.recipes.findIndex(r => r.id === action.payload.id);
        if (index !== -1) {
          state.recipes[index] = action.payload;
        }
      })
      .addCase(deleterecipe.fulfilled, (state, action) => {
        state.recipes = state.recipes.filter(r => r.id !== action.payload);
      });
  },
});

export const { loginSuccess, logout } = recipeSlice.actions;
export default recipeSlice.reducer;