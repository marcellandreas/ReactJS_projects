import Cookies from "js-cookie";
import React from "react";
import { Outlet, Navigate } from "react-router-dom";

// Fungsi untuk memeriksa token pengguna
const isAuthenticated = () => {
  return Cookies.get("token") ? true : false;
};

export default function PrivateRoute() {
  if (isAuthenticated()) {
    return <Outlet />;
  }
  return <Navigate to="/login" replace />;
}
