import React from 'react';
import { BookOpen, CheckCircle, Microscope } from 'lucide-react';
import content from '../content.json';
import './Capacitaciones.css';

const Capacitaciones = () => {
  return (
    <div className="capacitaciones-page">
      {/* SECCIÓN HERO */}
      <section className="cap-hero">
        <div className="container-general">
          <h1>{content.training.title}</h1>
          <p>{content.training.subtitle}</p>
        </div>
      </section>

      {/* SECCIÓN DE CURSOS */}
      <section className="courses-section">
        <div className="container-general">
          <div className="courses-grid">
            {content.training.courses.map((course) => (
              <div key={course.id} className="course-card-premium">
                <div className="course-icon-wrapper">
                  <BookOpen size={32} />
                </div>
                <h3>{course.name}</h3>
                <p>{course.detail}</p>
              </div>
            ))}
          </div>

          {/* BANNER DE CONSULTORÍA */}
          <div className="cap-consulting-banner">
            <div className="course-icon-wrapper">
              <Microscope size={48} />
            </div>
            <div className="banner-content">
              <h4>Consultoría para Empresas</h4>
              <p>
                Ofrecemos programas personalizados de <strong>Gestión de Requisitos e Ingeniería de Software</strong> adaptados a los desafíos técnicos de su equipo.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// ESTO ES LO QUE SOLUCIONA EL ERROR:
export default Capacitaciones;