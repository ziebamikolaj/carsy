import { createContext, useState, useContext, useMemo, ReactNode } from "react";

type AuthContextType = {
   isLoggedIn: boolean;
   setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
   const context = useContext(AuthContext);
   if (context === undefined) {
      throw new Error("useAuth must be used within a AuthProvider");
   }
   return context;
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
   children,
}) => {
   const [isLoggedIn, setIsLoggedIn] = useState(false);

   const contextValue = useMemo(
      () => ({ isLoggedIn, setIsLoggedIn }),
      [isLoggedIn]
   );

   return (
      <AuthContext.Provider value={contextValue}>
         {children}
      </AuthContext.Provider>
   );
};
