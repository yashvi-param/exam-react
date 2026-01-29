import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    dispatch({ type: "LOGIN" });
    navigate("/");
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <button className="btn btn-primary"
        onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}
