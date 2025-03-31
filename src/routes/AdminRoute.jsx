import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebaseConfig";

const AdminRoute = ({ children }) => {
  const [user, loading] = useAuthState(auth);

  if (loading) return <div className="loading">Cargando...</div>;

  // Solo permite el acceso al administrador definido
  if (user?.email === "lisandrotintaya@datacruz.com") {
    return children;
  }

  return <Navigate to="/" />;
};

export default AdminRoute;
