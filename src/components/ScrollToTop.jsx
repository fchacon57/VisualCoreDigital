import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Forzamos al navegador a ir a la posición superior izquierda
    window.scrollTo(0, 0);
  }, [pathname]); // El efecto se dispara cada vez que la URL cambia

  return null;
};

export default ScrollToTop;