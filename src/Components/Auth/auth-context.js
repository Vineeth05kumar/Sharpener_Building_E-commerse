import React, { createContext, useState, useEffect } from 'react';

const AuthContext = createContext({
  token: '',
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export const AuthProvider = (props) => {
  const [token, setToken] = useState('');

  const isLoggedIn = !!token;

  // Effect to restore login status from localStorage on component mount
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const login = (token) => {
    setToken(token);
    localStorage.setItem('token', token); // Store token in local storage
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem('token'); // Remove token from local storage
  };

  const authContext = {
    token: token,
    isLoggedIn: isLoggedIn,
    login: login,
    logout: logout,
  };

  return (
    <AuthContext.Provider value={authContext}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
