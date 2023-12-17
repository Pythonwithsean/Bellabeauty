import React, { useEffect } from "react";
import { auth } from "firebase/auth";

const authContext = React.createContext();

export function useAuth() {
  return React.useContext(authContext);
}

export function AuthProvider({ children }) {
  const [currentuser, setCurrentUser] = React.useState(null);

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentuser,
  };
  return <authContext.provider value={value}>{children}</authContext.provider>;
}

export default authContext;
