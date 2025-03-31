import React, { useEffect, useState } from "react";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import "../styles/ActualizarUsuarios.css"; // Asegúrate de crear este archivo

const ActualizarUsuarios = () => {
  const [estado, setEstado] = useState("cargando"); // 'cargando', 'éxito', 'error'
  const [mensaje, setMensaje] = useState("Actualizando usuarios...");

  useEffect(() => {
    const actualizarCampos = async () => {
      try {
        const usersRef = collection(db, "users");
        const snapshot = await getDocs(usersRef);
        let actualizados = 0;

        for (const documento of snapshot.docs) {
          const data = documento.data();
          const camposFaltantes = {};

          if (!data.hasOwnProperty("rol")) {
            camposFaltantes.rol = "usuario";
          }

          if (!data.hasOwnProperty("suspendido")) {
            camposFaltantes.suspendido = false;
          }

          if (Object.keys(camposFaltantes).length > 0) {
            await updateDoc(doc(db, "users", documento.id), camposFaltantes);
            actualizados++;
          }
        }

        setEstado("éxito");
        setMensaje(`✅ Usuarios actualizados correctamente: ${actualizados}`);
      } catch (error) {
        console.error("Error al actualizar usuarios:", error);
        setEstado("error");
        setMensaje("❌ Ocurrió un error al actualizar los usuarios.");
      }
    };

    actualizarCampos();
  }, []);

  return (
    <div className={`actualizar-container ${estado}`}>
      <h2>🔄 Actualización de Usuarios</h2>
      <p className="estado-texto">{mensaje}</p>
    </div>
  );
};

export default ActualizarUsuarios;
