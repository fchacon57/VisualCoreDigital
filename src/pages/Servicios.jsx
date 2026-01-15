import React from 'react';
import { Code, Server, Shield, ArrowRight } from 'lucide-react';
import content from '../content.json';
import './Servicios.css';

const Servicios = () => {
  const { servicios_detalle } = content;

  return (
    <div className="qh-page-container">
      {/* SECCIÓN HERO */}
      <section className="qh-hero">
        <div className="container-general">
          <span className="qh-tag">Especialización</span>
          <h1>{servicios_detalle.title}</h1>
          <p className="qh-description">{servicios_detalle.description}</p>
        </div>
      </section>
      
      {/* SECCIÓN LISTADO */}
      <section className="servicios-list-section">
        <div className="container-general">
          {servicios_detalle.items.map((item, index) => (
            <div key={item.id} className="servicio-row-clean">
              <div className="servicio-info-clean">
                <span className="servicio-number">0{index + 1}</span>
                <h2>{item.title}</h2>
                <ul className="servicio-puntos-clean">
                  {item.puntos.map((punto, i) => (
                    <li key={i}>
                      <ArrowRight size={18} className="icon-blue" />
                      {punto}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="servicio-visual-clean">
                {item.id === 1 && <Code size={80} strokeWidth={1} />}
                {item.id === 2 && <Server size={80} strokeWidth={1} />}
                {item.id === 3 && <Shield size={80} strokeWidth={1} />}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Servicios;