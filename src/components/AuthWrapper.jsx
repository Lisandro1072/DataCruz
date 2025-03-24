// src/components/AuthWrapper.jsx
import React from "react";
import "../styles/auth.css";

const AuthWrapper = ({ title, children }) => {
  return (
    <div className="auth-container">
      <div className="auth-header">
        <h1>{title}</h1>
      </div>
      <form className="auth-form">
        {children}
      </form>
    </div>
  );
};

export default AuthWrapper;
