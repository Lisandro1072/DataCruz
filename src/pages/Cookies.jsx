import React from 'react';
import '../styles/Legal.css';

const Cookies = () => {
  return (
    <div className="legal-page">
      <h1>Política de Cookies</h1>
      <p>Utilizamos cookies para mejorar tu experiencia en nuestra plataforma. A continuación, te explicamos qué son y cómo las usamos.</p>

      <h2>1. ¿Qué son las Cookies?</h2>
      <p>Son pequeños archivos que se almacenan en tu navegador al visitar nuestro sitio.</p>

      <h2>2. ¿Qué Cookies usamos?</h2>
      <ul>
        <li>Cookies de sesión</li>
        <li>Cookies de análisis</li>
        <li>Cookies de preferencias</li>
      </ul>

      <h2>3. ¿Cómo puedes desactivarlas?</h2>
      <p>Puedes configurar tu navegador para bloquear cookies o avisarte antes de almacenarlas.</p>
    </div>
  );
};

export default Cookies;
