import React, { useEffect } from "react";
import "../styles/Inicio.css";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Inicio = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="inicio-container">
      {/* Hero */}
      <section className="hero-section" data-aos="fade-up">
        <div className="hero-content">
          <h1>La herramienta inteligente para gestionar tus proyectos de construcción</h1>
          <p>Centraliza presupuestos, materiales, formatos y más. Todo en un solo lugar.</p>
          <Link to="/register" className="btn-primary">Comienza gratis</Link>
        </div>
      </section>

      {/* Beneficios */}
      <section className="benefits-section" data-aos="fade-right">
        <h2>¿Por qué usar nuestra plataforma?</h2>
        <div className="benefits-grid">
          <div className="benefit-card" data-aos="zoom-in">
            <h3>Automatización</h3>
            <p>Reduce tiempo gestionando documentos, cálculos y cotizaciones.</p>
          </div>
          <div className="benefit-card" data-aos="zoom-in" data-aos-delay="150">
            <h3>Actualización en Tiempo Real</h3>
            <p>Accede a precios y datos actualizados constantemente.</p>
          </div>
          <div className="benefit-card" data-aos="zoom-in" data-aos-delay="300">
            <h3>Acceso desde Cualquier Dispositivo</h3>
            <p>Usa la plataforma desde tu móvil, tablet o computadora.</p>
          </div>
        </div>
      </section>

      {/* Servicios resumen */}
      <section className="resumen-servicios" data-aos="fade-left">
        <h2>Servicios que ofrecemos</h2>
        <p>Explora cómo podemos ayudarte a optimizar cada etapa del proyecto.</p>
        <div className="servicios-links">
          <Link to="/servicios" className="btn-outline">Ver Servicios</Link>
        </div>
      </section>

      {/* Testimonios */}
      <section className="testimonios-section" data-aos="fade-up">
        <h2>Lo que dicen nuestros usuarios</h2>
        <div className="testimonios-grid">
          <div className="testimonial-card" data-aos="fade-right">
            <p>"La mejor herramienta que hemos usado en nuestra constructora."</p>
            <span>- Juan M., Ingeniero</span>
          </div>
          <div className="testimonial-card" data-aos="fade-left">
            <p>"Ahora puedo hacer cotizaciones en minutos, no horas."</p>
            <span>- Ana R., Arquitecta</span>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="cta-final" data-aos="zoom-in-up">
        <h2>¿Listo para construir con inteligencia?</h2>
        <Link to="/register" className="btn-primary">Regístrate Gratis</Link>
      </section>
    </div>
  );
};

export default Inicio;
