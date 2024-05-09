import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { createContext, useState } from "react";
import { auth } from "./firebase.config";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext();
function AuthProvider({ children }) {
  const [loading, setLoading] = useState(true);
  // create a user
  const createNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login a user
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //Google login
  const googleLogin = () => {
    setLoading(true);
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };
  const authInfo = {
    createNewUser,
    signInUser,
    googleLogin,
    loading,
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
}

export default AuthProvider;
