import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src="/visual-core-digital-logo.png" alt="Logo" className="nav-logo-icon" />
        <div className="nav-title"> {/* Esta clase ahora es la que tiene el color blanco */}
          Visual Core <span className="title-highlight">Digital</span>
        </div>
      </div>
      <div className="nav-menu">
        <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          Inicio
        </NavLink>
        <NavLink to="/que-hacemos" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          Qué hacemos
        </NavLink>
        <NavLink to="/servicios" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}       >
          Servicios
        </NavLink>
        {/* Los demás por ahora pueden ser <a> normales o estar desactivados */}
        <button className="btn-contact">Contáctenos</button>
      </div>
    </nav>
  );
};

export default Header;