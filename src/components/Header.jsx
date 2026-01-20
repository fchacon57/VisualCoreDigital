import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Header.css';

const Header = ({ onContactClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleContactClick = () => {
    setIsOpen(false);
    onContactClick();
  };

  return (
    <nav className="navbar">
      {/* Contenedor centralizador */}
      <div className="nav-container">
        
        <div className="logo-container">
          <img src="/visual-core-digital-logo.png" alt="Logo" className="nav-logo-icon" />
          <div className="nav-title">
            Visual Core <span className="title-highlight">Digital</span>
          </div>
        </div>

        <button className="mobile-menu-icon" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

        <div className={`nav-menu ${isOpen ? "active" : ""}`}>
          <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={() => setIsOpen(false)}>
            Inicio
          </NavLink>
          <NavLink to="/que-hacemos" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={() => setIsOpen(false)}>
            Qué hacemos
          </NavLink>
          <NavLink to="/servicios" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={() => setIsOpen(false)}>
            Servicios
          </NavLink>
          <NavLink to="/capacitaciones" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={() => setIsOpen(false)}>
            Capacitaciones
          </NavLink>
          
          <button className="btn-contact" onClick={handleContactClick}>
            Contáctenos
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Header;