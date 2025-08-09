/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState, useEffect } from "react";

type UserRole = "admin" | "editor";

interface AuthContextType {
  isAuthenticated: boolean;
  role: UserRole | null;
  login: (username: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

const fakeUsers = [
  { username: "admin", password: "admin123", role: "admin" },
  { username: "editor", password: "editor123", role: "editor" },
];

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [role, setRole] = useState<UserRole | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userRole = localStorage.getItem("role") as UserRole;
    if (token) {
      setIsAuthenticated(true);
      setRole(userRole);
    }
  }, []);

  const login = (username: string, password: string): boolean => {
    const user = fakeUsers.find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
      localStorage.setItem("token", "fake-jwt-token");
      localStorage.setItem("role", user.role);
      setIsAuthenticated(true);
    //   setRole(user.role);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.clear();
    setIsAuthenticated(false);
    setRole(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, role, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
