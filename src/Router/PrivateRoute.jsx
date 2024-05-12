import { useContext } from "react";
import { AuthContext } from "../Services/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

function PrivateRoute({ children }) {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <p>Loading......</p>;
  }
  if (user) {
    return children;
  }
  return (
    <div>
      <Navigate to="/login" state={location.pathname} replace={true}></Navigate>
    </div>
  );
}

export default PrivateRoute;
