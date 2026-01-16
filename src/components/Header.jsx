import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Header.css';

const Header = ({ onContactClick }) => { // Recibimos la prop onContactClick
  const [isOpen, setIsOpen] = useState(false);

  const handleContactClick = () => {
    setIsOpen(false); // Cerramos el menú móvil si estuviera abierto
    onContactClick(); // Ejecutamos la función que abre el modal
  };

  return (
    <nav className="navbar">
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
        
        {/* Botón conectado al modal */}
        <button className="btn-contact" onClick={handleContactClick}>
          Contáctenos
        </button>
      </div>
    </nav>
  );
};

export default Header;