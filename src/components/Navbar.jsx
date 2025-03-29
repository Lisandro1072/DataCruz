// src/components/Navbar.jsx
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";
import "../styles/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [user, setUser] = useState(null);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // Cerrar el dropdown al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    setDropdownOpen(false);
    navigate("/login");
  };

  return (
    <nav className="navbar-dark" data-aos="fade-down">
      <div className="navbar-container">
      <Link to="/" className="logo">
          <img src="/images/logo.jpg" alt="Logo" className="logo-icon" />
      </Link>


        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>Inicio</Link>
          <Link to="/servicios" onClick={() => setMenuOpen(false)}>Servicios</Link>
          <Link to="/contacto" onClick={() => setMenuOpen(false)}>Contacto</Link>
        </div>

        {!user ? (
          <div className="auth-buttons">
            <Link to="/login" className="btn-outline">Iniciar sesión</Link>
            <Link to="/register" className="btn-solid">Registrarse</Link>
          </div>
        ) : (
          <div className="user-menu" ref={dropdownRef}>
            <button onClick={toggleDropdown} className="user-btn">
              {user.displayName || user.email}
            </button>
            {dropdownOpen && (
              <div className="user-dropdown">
                <Link to="/perfil" onClick={() => setDropdownOpen(false)}>👤 Ver perfil</Link>
                <button onClick={handleLogout}>🚪 Cerrar sesión</button>
              </div>
            )}
          </div>
        )}

        <div className={`hamburger ${menuOpen ? "active" : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
