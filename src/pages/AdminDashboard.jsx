import React, { useEffect, useState } from "react";
import "../styles/AdminDashboard.css";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth, db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [totalUsuarios, setTotalUsuarios] = useState(null);
  const [totalAdmins, setTotalAdmins] = useState(null);
  const [totalSuscriptores, setTotalSuscriptores] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await getDocs(collection(db, "users"));
        let usuarios = 0;
        let admins = 0;
        let suscriptores = 0;

        snapshot.forEach(doc => {
          const data = doc.data();
          const rol = data.rol || "usuario";

          if (rol === "usuario") usuarios++;
          if (rol === "administrador") admins++;
          if (rol === "suscriptor") suscriptores++;
        });

        setTotalUsuarios(usuarios);
        setTotalAdmins(admins);
        setTotalSuscriptores(suscriptores);
      } catch (error) {
        console.error("Error al cargar métricas:", error);
      }
    };

    fetchData();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return (
    <div className="admin-container">
      <h2 className="admin-title">👋 Bienvenido administrador a <span className="datacruz-highlight">DataCruz</span></h2>

      {/* Resumen de perfil */}
      <div className="admin-section profile-summary">
        <h3>👤 Resumen del perfil</h3>
        <p><strong>Nombre:</strong> Administrador</p>
        <p><strong>Email:</strong> lisandrotintaya@datacruz.com</p>
      </div>

      {/* Estadísticas rápidas */}
      <div className="admin-section stats-grid">
        <div className="stat-card">
          <h4>Usuarios registrados</h4>
          <span>{totalUsuarios !== null ? totalUsuarios : "..."}</span>
        </div>
        <div className="stat-card">
          <h4>Administradores activos</h4>
          <span>{totalAdmins !== null ? totalAdmins : "..."}</span>
        </div>
        <div className="stat-card">
          <h4>Suscriptores activos</h4>
          <span>{totalSuscriptores !== null ? totalSuscriptores : "..."}</span>
        </div>
      </div>

      {/* Accesos directos */}
      <div className="admin-section quick-actions">
        <h3>⚙️ Accesos directos</h3>
        <div className="action-buttons">
          <Link to="/gestion-usuarios" className="admin-btn">Gestión de Usuarios</Link>
          <Link to="/gestion-servicios" className="admin-btn">Gestión de Servicios</Link>
          <Link to="/gestion-contenido" className="admin-btn">Gestión de Contenido</Link>
          <button className="admin-btn logout" onClick={handleLogout}>Cerrar Sesión</button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
