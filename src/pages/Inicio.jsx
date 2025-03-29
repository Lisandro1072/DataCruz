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
          <h1>DataCruz: la plataforma inteligente para la construcción moderna</h1>
          <p>Gestiona tus proyectos con precisión, actualizaciones en tiempo real y herramientas automatizadas.</p>
          <Link to="/register" className="btn-primary">Comienza gratis</Link>
        </div>
      </section>

      {/* Sobre Nosotros */}
      <section className="about-section" data-aos="fade-up">
        <div className="about-content">
          <h2>¿Quiénes somos?</h2>
          <p>
            En <strong>DataCruz</strong> transformamos la forma en que los profesionales de la construcción acceden y gestionan la información crítica para sus proyectos.
            Nuestro objetivo es centralizar datos como precios de materiales, mano de obra, herramientas y formatos técnicos, todo en una plataforma segura y fácil de usar.
          </p>
          <p>
            Nuestra misión es empoderar a arquitectos, ingenieros, constructores y proveedores para tomar decisiones rápidas, rentables y basadas en información actualizada.
          </p>
          <p>
            Ya seas parte de una gran empresa o una constructora local, en <strong>DataCruz</strong> tienes una herramienta diseñada para crecer contigo.
          </p>
        </div>
      </section>

      {/* Beneficios */}
      <section className="benefits-section" data-aos="fade-right">
        <h2>¿Por qué usar nuestra plataforma?</h2>
        <div className="benefits-grid">
          <div className="benefit-card" data-aos="fade-up">
            <img src="/images/imagen1.jpg" alt="Automatización" className="benefit-img" />
            <h3>Automatización</h3>
            <p>Reduce tiempo gestionando documentos, cálculos y cotizaciones.</p>
          </div>
          <div className="benefit-card" data-aos="fade-up" data-aos-delay="100">
            <img src="/images/actualizacion.jpg" alt="Actualización en Tiempo Real" className="benefit-img" />
            <h3>Actualización en Tiempo Real</h3>
            <p>Accede a precios y datos actualizados constantemente.</p>
          </div>
          <div className="benefit-card" data-aos="fade-up" data-aos-delay="200">
            <img src="/images/acceso.jpg" alt="Acceso desde cualquier dispositivo" className="benefit-img" />
            <h3>Acceso desde cualquier dispositivo</h3>
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
