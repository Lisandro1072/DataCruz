// src/pages/Register.jsx
import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebaseConfig";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import "../styles/Auth.css";

const Register = () => {
  const [nombre, setNombre] = useState("");
  const [compania, setCompania] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const registerUser = async (e) => {
    e.preventDefault();
    try {
      const cred = await createUserWithEmailAndPassword(auth, email, password);

      await setDoc(doc(db, "users", cred.user.uid), {
        nombre,
        compania,
        email,
        rol: "usuario",         // por defecto
        suspendido: false       // por defecto
      });

      navigate("/");
    } catch (error) {
      alert("Error al registrar: " + error.message);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box register-box">
        <h2>Crea una cuenta</h2>
        <form onSubmit={registerUser}>
          <input type="text" placeholder="Nombre completo" value={nombre} onChange={e => setNombre(e.target.value)} required />
          <input type="text" placeholder="Nombre de la Compañía" value={compania} onChange={e => setCompania(e.target.value)} required />
          <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
          <input type="password" placeholder="Contraseña (mínimo 6 caracteres)" value={password} onChange={e => setPassword(e.target.value)} required />
          <button type="submit">Registrar</button>
        </form>
        <p>¿Ya tienes cuenta? <a href="/login">Iniciar sesión</a></p>
      </div>
    </div>
  );
};

export default Register;
