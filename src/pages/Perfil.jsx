// src/pages/Perfil.jsx
import React, { useEffect, useState } from "react";
import { auth, db } from "../firebaseConfig";
import { onAuthStateChanged, updateProfile } from "firebase/auth";
import { doc, getDoc, updateDoc, setDoc } from "firebase/firestore";
import "../styles/Perfil.css";

const Perfil = () => {
  const [user, setUser] = useState(null);
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [editing, setEditing] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setFullName(currentUser.displayName || "");

        try {
          const userRef = doc(db, "users", currentUser.uid);
          const userDoc = await getDoc(userRef);

          if (userDoc.exists()) {
            setPhone(userDoc.data().phone || "");
          } else {
            await setDoc(userRef, {
              fullName: currentUser.displayName || "",
              email: currentUser.email,
              phone: "",
            });
          }
        } catch (error) {
          console.error("Error al obtener datos del usuario:", error);
        }
      }
    });

    return () => unsubscribe();
  }, []);

  const handleUpdateProfile = async () => {
    setMessage({ type: "", text: "" });

    try {
      if (!user) return;

      await updateProfile(auth.currentUser, { displayName: fullName });

      const userRef = doc(db, "users", user.uid);
      await updateDoc(userRef, { fullName, phone });

      setMessage({ type: "success", text: "Perfil actualizado correctamente." });
      setEditing(false);
    } catch (error) {
      console.error("Error al actualizar perfil:", error);
      setMessage({ type: "error", text: "No se pudo actualizar el perfil." });
    }
  };

  return (
    <div className="perfil-container" data-aos="zoom-in" data-aos-duration="1000">
      <h2>Perfil del Usuario</h2>

      {message.text && <div className={`message ${message.type}`}>{message.text}</div>}

      {!editing ? (
        <div>
          <p><strong>Nombre:</strong> {fullName}</p>
          <p><strong>Email:</strong> {user?.email}</p>
          <p><strong>Teléfono:</strong> {phone || "No especificado"}</p>

          <button onClick={() => setEditing(true)}>Editar Perfil</button>
        </div>
      ) : (
        <div>
          <label>Nombre Completo</label>
          <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />

          <label>Teléfono</label>
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />

          <button onClick={handleUpdateProfile}>Guardar Cambios</button>
          <button onClick={() => setEditing(false)}>Cancelar</button>
        </div>
      )}
    </div>
  );
};

export default Perfil;
