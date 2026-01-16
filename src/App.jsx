import React, { useState } from 'react'; // Importamos useState
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Inicio from './pages/Inicio';
import QueHacemos from './pages/QueHacemos';
import Servicios from './pages/Servicios';
import Capacitaciones from './pages/Capacitaciones';
import ContactModal from './components/ContactModal'; // Importamos el nuevo Modal
import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Funciones para controlar el modal
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <Router>
      <div className="app-container">
        {/* Pasamos la función openModal al Header */}
        <Header onContactClick={openModal} /> 
        
        <main>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/que-hacemos" element={<QueHacemos />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/capacitaciones" element={<Capacitaciones />} />
          </Routes>
        </main>

        <Footer />

        {/* El Modal se renderiza aquí y espera a ser activado */}
        <ContactModal 
          isOpen={isModalOpen} 
          onClose={closeModal} 
        />
      </div>
    </Router>
  );
}

export default App;