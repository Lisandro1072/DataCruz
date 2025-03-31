import React, { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../firebaseConfig";
import Notification from "../components/Notification"; // ✅ Notificación
import "../styles/GestionUsuarios.css";
import BotonVolverAdmin from "../components/BotonVolverAdmin";

const GestionUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [notification, setNotification] = useState(null); // ✅ Estado de notificación

  useEffect(() => {
    const fetchUsuarios = async () => {
      const snapshot = await getDocs(collection(db, "users"));
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUsuarios(data);
    };

    fetchUsuarios();
  }, []);

  const handleChange = (e, id, field) => {
    const updatedUsuarios = usuarios.map((user) =>
      user.id === id ? { ...user, [field]: e.target.value } : user
    );
    setUsuarios(updatedUsuarios);
  };

  const toggleSuspension = async (user) => {
    try {
      const updatedUser = { ...user, suspendido: !user.suspendido };
      await updateDoc(doc(db, "users", user.id), {
        suspendido: updatedUser.suspendido,
      });
      setUsuarios((prev) =>
        prev.map((u) => (u.id === user.id ? updatedUser : u))
      );
      showNotification("success", `Usuario ${updatedUser.suspendido ? "suspendido" : "activado"} correctamente.`);
    } catch (error) {
      showNotification("error", "Error al cambiar el estado del usuario.");
    }
  };

  const guardarCambios = async (user) => {
    try {
      await updateDoc(doc(db, "users", user.id), {
        nombre: user.nombre,
        compania: user.compania,
        email: user.email,
        rol: user.rol,
      });
      showNotification("success", "✅ Usuario actualizado correctamente.");
    } catch (error) {
      showNotification("error", "❌ Error al actualizar usuario.");
    }
  };

  const eliminarUsuario = async (id) => {
    try {
      await deleteDoc(doc(db, "users", id));
      setUsuarios((prev) => prev.filter((user) => user.id !== id));
      showNotification("success", "🗑️ Usuario eliminado correctamente.");
    } catch (error) {
      showNotification("error", "❌ Error al eliminar usuario.");
    }
  };

  // ✅ Función para mostrar notificación
  const showNotification = (type, message) => {
    setNotification({ type, message });
    setTimeout(() => setNotification(null), 3000); // Ocultar luego de 3 segundos
  };

  return (
    <div className="usuarios-container">
      <BotonVolverAdmin />
      <h2>👥 Gestión de Usuarios</h2>

      {notification && (
        <Notification
          type={notification.type}
          message={notification.message}
          onClose={() => setNotification(null)}
        />
      )}

      <div className="tabla-usuarios">
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Compañía</th>
              <th>Email</th>
              <th>Rol</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((user) => (
              <tr key={user.id}>
                <td>
                  <input
                    value={user.nombre || ""}
                    onChange={(e) => handleChange(e, user.id, "nombre")}
                  />
                </td>
                <td>
                  <input
                    value={user.compania || ""}
                    onChange={(e) => handleChange(e, user.id, "compania")}
                  />
                </td>
                <td>
                  <input
                    value={user.email || ""}
                    onChange={(e) => handleChange(e, user.id, "email")}
                  />
                </td>
                <td>
                  <select
                    value={user.rol || "usuario"}
                    onChange={(e) => handleChange(e, user.id, "rol")}
                  >
                    <option value="usuario">Usuario</option>
                    <option value="administrador">Administrador</option>
                    <option value="suscriptor">Suscriptor</option>
                  </select>
                </td>
                <td>
                  <button
                    className={`estado-btn ${user.suspendido ? "suspendido" : "activo"}`}
                    onClick={() => toggleSuspension(user)}
                  >
                    {user.suspendido ? "Suspendido" : "Activo"}
                  </button>
                </td>
                <td>
                  <button className="guardar-btn" onClick={() => guardarCambios(user)}>
                    Guardar
                  </button>
                  <button className="eliminar-btn" onClick={() => eliminarUsuario(user.id)}>
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {usuarios.length === 0 && <p>No hay usuarios registrados.</p>}
      </div>
    </div>
  );
};

export default GestionUsuarios;
