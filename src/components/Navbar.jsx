// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar-dark">
      <div className="navbar-container">
        <Link to="/" className="logo">
          <img src="/logo.svg" alt="Logo" className="logo-icon" />
        </Link>

        <div className="nav-links">
          <Link to="/">Inicio</Link>
          <Link to="/servicios">Servicios</Link>
          <Link to="/contacto">Contacto</Link>
        </div>

        <div className="auth-buttons">
          <Link to="/login" className="btn-outline">Iniciar sesión</Link>
          <Link to="/register" className="btn-solid">Registrarse</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
