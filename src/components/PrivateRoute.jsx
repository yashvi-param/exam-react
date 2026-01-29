import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const auth = useSelector(state => state.root.auth);
  return auth ? children : <Navigate to="/login" />;
}
