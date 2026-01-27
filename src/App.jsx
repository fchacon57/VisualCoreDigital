import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
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

  // Despertador de servidores (Ping)
  useEffect(() => {
    const wakeUpServers = async () => {
      const backendUrl = "https://visualcore-backend.onrender.com/";
      const msNotificationsUrl = "https://ms-notifications-7xyw.onrender.com/";
      
      try {
        await Promise.all([
          axios.get(backendUrl),
          axios.get(msNotificationsUrl)
        ]);
        console.log("Servidores Visual Core despertando...");
      } catch (error) {
        // Se ignoran errores de respuesta ya que el objetivo es solo activar el contenedor
      }
    };

    wakeUpServers();
  }, []);

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