import React from 'react';
import '../styles/Servicios.css';
import { FaTools, FaHardHat, FaDraftingCompass, FaFileAlt, FaCalculator } from 'react-icons/fa';
import { MdDesignServices } from 'react-icons/md';

const Servicios = () => {
  return (
    <section className="servicios-section">
      <h2 className="titulo-servicios">Nuestros Servicios</h2>

      <div className="servicios-grid">

        {/* Asesoría en Construcción */}
        <div className="servicio-card">
          <FaHardHat className="icono-servicio" />
          <h3>Asesoría en Construcción</h3>
          <p>Brindamos apoyo técnico profesional para tus proyectos de construcción.</p>
        </div>

        {/* Catálogo de Materiales y Herramientas */}
        <div className="servicio-card">
          <FaTools className="icono-servicio" />
          <h3>Catálogo de Materiales</h3>
          <p>Consulta precios actualizados y stock de materiales y herramientas en tiempo real.</p>
        </div>

        {/* Mano de Obra Especializada */}
        <div className="servicio-card">
          <FaDraftingCompass className="icono-servicio" />
          <h3>Mano de Obra Especializada</h3>
          <p>Conecta con profesionales de confianza según el tipo de obra que necesites.</p>
        </div>

        {/* Diseño 3D BIM Interactivo */}
        <div className="servicio-card">
          <MdDesignServices className="icono-servicio" />
          <h3>Diseño 3D BIM</h3>
          <p>Visualiza y ajusta tu proyecto con tecnología de modelado avanzado.</p>
        </div>

        {/* Formatos y Plantillas */}
        <div className="servicio-card">
          <FaFileAlt className="icono-servicio" />
          <h3>Formatos y Plantillas</h3>
          <p>Automatiza tus documentos y controla cada fase del proyecto fácilmente.</p>
        </div>

        {/* Cotizaciones Inteligentes */}
        <div className="servicio-card">
          <FaCalculator className="icono-servicio" />
          <h3>Cotizaciones Inteligentes</h3>
          <p>Genera presupuestos detallados de forma rápida y profesional.</p>
        </div>

      </div>
    </section>
  );
};

export default Servicios;
