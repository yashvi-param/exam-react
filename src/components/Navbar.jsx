import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function Navbar() {
  const dispatch = useDispatch();

  return (
    <nav className="navbar navbar-gray bg-gray px-3">
      <Link className="navbar-brand" to="/">Recipe Book</Link>
      <div>
        <Link className="btn btn-light me-2" to="/">Recipes</Link>
        <Link className="btn btn-success me-2" to="/add">Add</Link>
        <button className="btn btn-danger"
          onClick={() => dispatch({ type: "LOGOUT" })}>
          Logout
        </button>
      </div>
    </nav>
  );
}
