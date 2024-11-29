import React, { createContext, useContext, useState, useEffect } from 'react';  
const AuthContext = createContext();  
export const useAuth = () => {  
  return useContext(AuthContext);  
};  
export const AuthProvider = ({ children }) => {  
  const [user, setUser] = useState(null);  
  const login = (email, password) => {  
    const mockUser = { email }; 
    setUser(mockUser);  
  };  
  const logout = () => {  
    setUser(null);  
  };  
  useEffect(() => {  
    const storedUser = JSON.parse(localStorage.getItem('user'));  
    if (storedUser) {  
      setUser(storedUser);  
    }  
  }, []);  
  useEffect(() => {  
    if (user) {  
      localStorage.setItem('user', JSON.stringify(user));  
    } else {  
      localStorage.removeItem('user');  
    }  
  }, [user]);  
  const value = {  
    user,  
    login,  
    logout,  
  };  

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;  
};  

export default AuthContext;