import Cookies from "js-cookie";
import { Navigate, Outlet } from "react-router-dom";

// Token
const isAuthenticated = () => {
  return Cookies.get("token") ? true : false;
};

export default function ProtectedRoute() {
  if (isAuthenticated()) {
    return <Navigate to="/user" replace />;
  }
  return <Outlet />;
}
