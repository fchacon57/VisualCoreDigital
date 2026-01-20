import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Inicio from './pages/Inicio';
import QueHacemos from './pages/QueHacemos';
import Servicios from './pages/Servicios';
import Capacitaciones from './pages/Capacitaciones';
import ContactModal from './components/ContactModal';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Funciones para controlar el modal
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <Router>
      <ScrollToTop />
      <div className="app-container">
        {/* Pasamos la función openModal al Header para el botón del menú */}
        <Header onContactClick={openModal} /> 
        
        <main>
          <Routes>
            {/* CORRECCIÓN: Ahora Inicio recibe la función para abrir el modal desde el Hero */}
            <Route path="/" element={<Inicio onContactClick={openModal} />} />
            
            <Route path="/que-hacemos" element={<QueHacemos />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/capacitaciones" element={<Capacitaciones />} />
          </Routes>
        </main>

        <Footer />

        {/* El Modal se mantiene aquí, escuchando el estado isModalOpen */}
        <ContactModal 
          isOpen={isModalOpen} 
          onClose={closeModal} 
        />
      </div>
    </Router>
  );
}

export default App;