// AuthContext.tsx
import React, { createContext, useState, useContext } from "react";

// Type for the context value
type AuthContextType = {
   isLoggedIn: boolean;
   setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
};

// Create context with a default value
export const AuthContext = createContext<AuthContextType>(null!);

// Create a custom hook to use the auth context
export const useAuth = () => useContext(AuthContext);

// Provider component
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
   children,
}) => {
   const [isLoggedIn, setIsLoggedIn] = useState(false);

   return (
      <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
         {children}
      </AuthContext.Provider>
   );
};
