import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import RecipeList from "./components/RecipeList";
import RecipeForm from "./components/RecipeForm";
import RecipeDetails from "./components/RecipeDetails";
import PrivateRoute from "./components/PrivateRoute";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<PrivateRoute><RecipeList /></PrivateRoute>} />
        <Route path="/add" element={<PrivateRoute><RecipeForm /></PrivateRoute>} />
        <Route path="/details/:id" element={<PrivateRoute><RecipeDetails /></PrivateRoute>} />
      </Routes>
    </BrowserRouter>
  );
}
