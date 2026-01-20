import React from 'react';
import { CheckCircle, Code, Cloud, Shield, Cpu, GraduationCap, Microscope } from 'lucide-react'; 
import content from '../content.json';
import './Inicio.css';

// Recibimos onContactClick como prop desde App.jsx
const Inicio = ({ onContactClick }) => {
  const iconMap = {
    1: <Code size={40} />,
    2: <Cloud size={40} />,
    3: <Shield size={40} />,
    4: <Cpu size={40} />
  };

  return (
    <div className="inicio-page">
        {/* HERO SECTION */}
        <section className="hero-section" id="inicio">
          <div className="container-general">
            <h1 className="hero-title">{content.hero.title}</h1>
            <p className="hero-subtitle">{content.hero.subtitle}</p>
            
            {/* Vinculamos el click al disparador del modal */}
            <button 
              className="cta-main" 
              onClick={onContactClick}
            >
              {content.hero.cta}
            </button>
          </div>
        </section>

        {/* TECH STACK */}
        <section className="tech-stack">
          <div className="container-general">
            <span className="stack-title">Nuestra Tecnología:</span>
            <div className="logos-grid">
              <div className="tech-item">Java</div>
              <div className="tech-item">Node.js</div>
              <div className="tech-item">React</div>
              <div className="tech-item">MongoDB</div>
              <div className="tech-item">PostgreSQL</div>
              <div className="tech-item">AWS</div>
              <div className="tech-item">Python</div>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section className="about-brief" id="quesomos">
          <div className="container-general">
            <h2>{content.about.title}</h2>
            <p>{content.about.description}</p>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section className="services-section" id="servicios">
          <div className="container-general">
            {content.services.map((service) => (
              <div key={service.id} className="service-card">
                <div className="card-accent"></div>
                <div className="service-icon">
                  {iconMap[service.id] || <Code size={40} />}
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* TRAINING SECTION */}
        <section className="training-section" id="capacitaciones">
          <div className="container-general">
            <div className="training-header">
              <GraduationCap size={48} className="training-main-icon" />
              <h2>{content.training.title}</h2>
              <p>{content.training.subtitle}</p>
            </div>
            
            <div className="training-list">
              {content.training.courses.map((course) => (
                <div key={course.id} className="training-card">
                  <div className="training-card-content">
                    <CheckCircle className="check-icon" size={20} />
                    <div className="course-info">
                      <span className="course-name">{course.name}</span>
                      <p className="course-detail">{course.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="training-badge">
              <Microscope size={20} />
              <span>Consultoría especializada en <strong>Gestión de Requisitos e Ingeniería de Software</strong> para empresas.</span>
            </div>
          </div>
        </section>
    </div>
  );
};

export default Inicio;