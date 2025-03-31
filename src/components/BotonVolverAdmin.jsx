// src/components/BotonVolverAdmin.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/BotonVolverAdmin.css"; // Asegúrate de tener este archivo CSS

const BotonVolverAdmin = () => {
  const navigate = useNavigate();

  return (
    <button className="btn-volver-admin" onClick={() => navigate("/admin")}>
      🔙 Volver al Panel Admin
    </button>
  );
};

export default BotonVolverAdmin;
