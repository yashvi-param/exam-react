import { BrowserRouter, Routes, Route } from "react-router-dom"
import RecipeForm from "./Components/pages/RecipeForm";
import RecipeDetails from "./Components/pages/RecipeDetails";
import RecipeList from "./Components/pages/RecipeList";
import Login from "./Auth/Login";
import PrivateRoute from "./Auth/PrivateRoute";
import Navbar from "./Components/ui/Navbar";

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