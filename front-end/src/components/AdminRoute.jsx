import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthStore } from "../stores/auth.store";
export default function AdminRoute({ children }) {
  const { token, role } = useAuthStore();

  if (!token) return <Navigate to="/login" replace />;
  if (role !== "ADMIN") return <Navigate to="/" replace />;

  return children;
}
