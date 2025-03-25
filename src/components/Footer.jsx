// src/components/Footer.jsx
import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer" data-aos="fade-up" data-aos-duration="1000">
      <div className="footer-top">
        <div className="footer-logo">
          <img src="/images/vite.svg" alt="Logo" />
          <p>© {new Date().getFullYear()} Mi Empresa. Todos los derechos reservados.</p>
        </div>

        <div className="footer-links">
          <a href="/terminos">Términos</a>
          <a href="/privacidad">Privacidad</a>
          <a href="/cookies">Cookies</a>
        </div>

        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
