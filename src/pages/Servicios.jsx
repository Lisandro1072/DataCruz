import React, { useEffect } from 'react';
import '../styles/Servicios.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaTools, FaHardHat, FaDraftingCompass, FaFileAlt, FaCalculator } from 'react-icons/fa';
import { MdDesignServices } from 'react-icons/md';

const Servicios = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="servicios-section">
      <h2 className="titulo-servicios" data-aos="fade-up">Nuestros Servicios</h2>

      <div className="servicios-grid">
        <div className="servicio-card" data-aos="flip-left">
          <FaHardHat className="icono-servicio" />
          <h3>Asesoría en Construcción</h3>
          <p>Brindamos apoyo técnico profesional para tus proyectos de construcción.</p>
        </div>

        <div className="servicio-card" data-aos="flip-right">
          <FaTools className="icono-servicio" />
          <h3>Catálogo de Materiales</h3>
          <p>Consulta precios actualizados y stock de materiales y herramientas en tiempo real.</p>
        </div>

        <div className="servicio-card" data-aos="flip-left">
          <FaDraftingCompass className="icono-servicio" />
          <h3>Mano de Obra Especializada</h3>
          <p>Conecta con profesionales de confianza según el tipo de obra que necesites.</p>
        </div>

        <div className="servicio-card" data-aos="flip-right">
          <MdDesignServices className="icono-servicio" />
          <h3>Diseño 3D BIM</h3>
          <p>Visualiza y ajusta tu proyecto con tecnología de modelado avanzado.</p>
        </div>

        <div className="servicio-card" data-aos="flip-left">
          <FaFileAlt className="icono-servicio" />
          <h3>Formatos y Plantillas</h3>
          <p>Automatiza tus documentos y controla cada fase del proyecto fácilmente.</p>
        </div>

        <div className="servicio-card" data-aos="flip-right">
          <FaCalculator className="icono-servicio" />
          <h3>Cotizaciones Inteligentes</h3>
          <p>Genera presupuestos detallados de forma rápida y profesional.</p>
        </div>
      </div>
    </section>
  );
};

export default Servicios;
