import { ReactNode, createContext, useEffect, useState } from "react";

type AuthcontextType = {
  isAuthenticated: boolean;
};

const initialAuthContext: AuthcontextType = {
  isAuthenticated: false,
};

const auth = createContext<AuthcontextType>(initialAuthContext);

type authProviderProps = {
  children: ReactNode;
};

const AuthProvider = ({ children }: authProviderProps): JSX.Element => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const TOKEN = localStorage.getItem("TOKEN");
    if (TOKEN) {
      setIsAuthenticated(true);
    }
  }, []);

  const contextValue: AuthcontextType = {
    isAuthenticated: isAuthenticated,
  };

  return <auth.Provider value={contextValue}>{children}</auth.Provider>;
};

export { AuthProvider, auth };
