import React, { useEffect } from 'react';
import '../styles/Contacto.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contacto = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="contact-container">
      <h2 className="contact-title" data-aos="fade-down">¿Tienes alguna duda o consulta?</h2>
      <p className="contact-subtitle" data-aos="fade-up">Nuestro equipo está listo para ayudarte</p>

      <form className="contact-form" data-aos="zoom-in">
        <input type="text" placeholder="Nombre completo" required />
        <input type="email" placeholder="Correo electrónico" required />
        <textarea placeholder="Escribe tu mensaje aquí..." rows="5" required></textarea>
        <button type="submit">Enviar mensaje</button>
      </form>

      <div className="contact-info" data-aos="fade-up" data-aos-delay="300">
        <div>
          <h3>📍 Dirección</h3>
          <p>La Paz, Bolivia</p>
        </div>
        <div>
          <h3>📞 Teléfono</h3>
          <p>+591 76543210</p>
        </div>
        <div>
          <h3>✉️ Correo</h3>
          <p>info@miempresa.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
