import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({ name: '' });

  const setUserName = (name) => {
    setUser((prev) => ({ ...prev, name }));
  };

  return (
    <AuthContext.Provider value={{ user, setUserName }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
