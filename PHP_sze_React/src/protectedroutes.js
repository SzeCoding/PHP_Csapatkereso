import { Outlet, Navigate } from "react-router-dom";

const useAuth = () => {
  const user = { loggedIn: true };
  return user.loggedIn;
};

export default function ProtectedRoutes() {
  const isAuth = useAuth();

  return isAuth ? <Outlet /> : <Navigate to="/login" />;
}
