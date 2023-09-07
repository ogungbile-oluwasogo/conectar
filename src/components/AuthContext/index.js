// AuthContext.js
import { createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [authMode, setAuthMode] = useState(""); // "signup" or "login"
  const [authModalOpen, setAuthModalOpen] = useState(false);

  const openAuthModal = (mode) => {
    setAuthMode(mode);
    setAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setAuthModalOpen(false);
    setAuthMode("");
  };

  return (
    <AuthContext.Provider
      value={{ authMode, authModalOpen, openAuthModal, closeAuthModal }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
