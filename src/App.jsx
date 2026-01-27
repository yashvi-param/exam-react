import { BrowserRouter, Routes, Route } from "react-router-dom"
import RecipeForm from "./pages/RecipeForm";
import RecipeDetails from "./pages/RecipeDetails";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/add"
          element={
            <PrivateRoute>
              <RecipeForm />
            </PrivateRoute>
          }
        />

        <Route
          path="/recipe/:id"
          element={
            <PrivateRoute>
              <RecipeDetails />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
