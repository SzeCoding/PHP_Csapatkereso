import { useState } from "react";
import { Outlet, Navigate } from "react-router-dom";

export const useAuth = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(true);

  function login() {
    setUserLoggedIn(true);
  }

  const logout = () => {
    setUserLoggedIn(false);
  };

  return { userLoggedIn, login, logout };
};

export default function ProtectedRoutes() {
  const { userLoggedIn } = useAuth();

  return userLoggedIn ? <Outlet /> : <Navigate to="/login" />;
}
