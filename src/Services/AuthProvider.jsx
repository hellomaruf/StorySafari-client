import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react";
import { auth } from "./firebase.config";

export const AuthContext = createContext();
function AuthProvider({ children }) {
  // create a user
  const createNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const authInfo = {
    createNewUser
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
}

export default AuthProvider;
