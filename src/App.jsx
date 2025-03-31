// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebaseConfig";

// Componentes
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Páginas
import Inicio from "./pages/Inicio";
import Servicios from "./pages/Servicios";
import Contacto from "./pages/Contacto";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Perfil from "./pages/Perfil";
import Terminos from './pages/Terminos';
import Privacidad from './pages/Privacidad';
import Cookies from './pages/Cookies';
import AdminDashboard from "./pages/AdminDashboard";
import AdminRoute from "./routes/AdminRoute";
import GestionUsuarios from "./pages/GestionUsuarios";
import ActualizarUsuarios from "./pages/ActualizarUsuarios";

import "./App.css";
import "./styles/main.css";

const AppContent = () => {
  const location = useLocation();
  const [user] = useAuthState(auth);

  // Rutas donde no se mostrará navbar ni footer
  const rutasOcultas = [
    "/admin",
    "/gestion-usuarios",
    "/gestion-servicios",
    "/gestion-contenido",
    "/actualizar-usuarios"
  ];

  const hideNavbarFooter = rutasOcultas.includes(location.pathname);

  return (
    <>
      <ScrollToTop />
      {!hideNavbarFooter && <Navbar />}

      <div className="main-content">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/terminos" element={<Terminos />} />
          <Route path="/privacidad" element={<Privacidad />} />
          <Route path="/cookies" element={<Cookies />} />
          
          <Route path="/admin" element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          } />
          <Route path="/gestion-usuarios" element={
            <AdminRoute>
              <GestionUsuarios />
            </AdminRoute>
          } />
          <Route path="/actualizar-usuarios" element={
            <AdminRoute>
              <ActualizarUsuarios />
            </AdminRoute>
          } />
        </Routes>
      </div>

      {/* Botón flotante para volver al panel admin */}
      {user?.email === "lisandrotintaya@datacruz.com" && !hideNavbarFooter && (
        <Link to="/admin" className="admin-floating-btn">
          Panel Admin
        </Link>
      )}

      {!hideNavbarFooter && <Footer />}
    </>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
