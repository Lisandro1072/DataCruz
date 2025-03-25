import React from 'react';
import '../styles/Legal.css';

const Privacidad = () => {
  return (
    <div className="legal-page">
      <h1>Política de Privacidad</h1>
      <p>Nos tomamos muy en serio la privacidad de nuestros usuarios. Aquí explicamos cómo recogemos, usamos y protegemos tus datos personales.</p>

      <h2>1. Recopilación de Datos</h2>
      <p>Recopilamos información como nombre, correo y empresa para personalizar tu experiencia.</p>

      <h2>2. Uso de Datos</h2>
      <p>Utilizamos tus datos para ofrecer un servicio más eficiente, no los compartimos con terceros sin consentimiento.</p>

      <h2>3. Seguridad</h2>
      <p>Contamos con protocolos de seguridad para proteger tus datos frente a accesos no autorizados.</p>
    </div>
  );
};

export default Privacidad;
