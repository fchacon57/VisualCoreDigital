import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Inicio from './pages/Inicio';
import QueHacemos from './pages/QueHacemos';
import Servicios from './pages/Servicios';
import Capacitaciones from './pages/Capacitaciones';
import './App.css';


function App() {
  return (
    <Router>
      <div className="app-container">
        <Header /> {/* El Header siempre visible */}
        
        <main>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/que-hacemos" element={<QueHacemos />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/capacitaciones" element={<Capacitaciones />} />
          </Routes>
        </main>

        <Footer /> {/* El Footer siempre visible */}
      </div>
    </Router>
  );
}

export default App;