import { useContext } from "react";
import { AuthContext } from "../Services/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import loader from "../assets/images/loader.json";
import Lottie from "react-lottie";

function PrivateRoute({ children }) {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loader,
  };
  if (loading) {
    return (
      <div className="max-w-44 mx-auto h-96 flex items-center justify-center">
        <Lottie options={defaultOptions}></Lottie>
      </div>
    );
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
