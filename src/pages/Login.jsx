// src/pages/Login.jsx
import React, { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import "../styles/Auth.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      alert("Error al iniciar sesión: " + error.message);
    }
  };

  const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate("/");
    } catch (error) {
      alert("Error con Google: " + error.message);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box login-box" data-aos="fade-up" data-aos-duration="1000">
        <h2>Bienvenido</h2>
        <form onSubmit={loginUser}>
          <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
          <input type="password" placeholder="Contraseña" value={password} onChange={e => setPassword(e.target.value)} required />
          <button type="submit">Iniciar sesión</button>
        </form>
        <button className="google-btn" onClick={loginWithGoogle}>Ingresar con Google</button>
        <p>¿No tienes una cuenta? <a href="/register">Regístrate</a></p>
      </div>
    </div>
  );
};

export default Login;
