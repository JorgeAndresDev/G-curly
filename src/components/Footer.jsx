import { Link } from "react-router-dom";
import Logo from "../assets/Logo-g-curly.jpg";

const Footer = () => {
  return (
    <footer className="bg-primary text-accent pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">

          {/* Brand & Logo */}
          <div className="flex flex-col items-center md:items-start">
            <img
              src={Logo}
              alt="G-Curly Logo"
              className="h-20 w-auto rounded-full mb-4 border-2 border-secondary"
            />
            <p className="text-sm opacity-80 mt-2 max-w-xs">
              Especialistas en el cuidado y amor por tus rizos naturales.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col space-y-3">
            <h4 className="font-bold text-secondary uppercase tracking-wider text-sm mb-2">Explora</h4>
            <Link to="/" className="hover:text-secondary transition-colors">Inicio</Link>
            <Link to="/tienda" className="hover:text-secondary transition-colors">Tienda</Link>
            <Link to="/salon" className="hover:text-secondary transition-colors">Salón</Link>
            <Link to="/rutinas" className="hover:text-secondary transition-colors">Rutinas</Link>
          </div>

          {/* Copy & Contact */}
          <div className="flex flex-col space-y-3">
            <h4 className="font-bold text-secondary uppercase tracking-wider text-sm mb-2">Contacto</h4>
            <a href="https://wa.me/573042134073" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
              WhatsApp: +57 304 213 4073
            </a>
            <span className="opacity-80">Sinc elejo, Sucre, Colombia</span> {/* Placeholder location */}
          </div>
        </div>

        <div className="border-t border-accent/20 mt-12 pt-6 text-center text-xs opacity-60">
          <p>© {new Date().getFullYear()} G-Curly. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
