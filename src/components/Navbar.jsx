import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/Logo-g-curly-solo.jpg";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Inicio", path: "/" },
    { name: "Tienda", path: "/tienda" },
    { name: "Salón", path: "/salon" },
    { name: "Rutinas", path: "/rutinas" },
  ];

  return (
    <nav className="bg-white/95 dark:bg-deep-green/95 backdrop-blur-md shadow-sm sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-2">
            <img className="h-24 w-auto object-contain rounded-full" src={Logo} alt="Logo-solo" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-semibold tracking-wide transition-colors duration-300 ${isActive ? "text-secondary border-b-2 border-secondary" : "text-primary dark:text-accent hover:text-secondary dark:hover:text-terracotta"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <div className="flex items-center gap-4 border-l pl-4 border-gray-200 dark:border-gray-600">
              <ThemeToggle />
              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/573042134073"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 rounded-full bg-secondary text-white font-semibold text-sm hover:bg-terracotta transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-300 flex items-center gap-2"
              >
                <span>Contacto</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" /></svg>
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-primary hover:text-secondary focus:outline-none transition-colors"
            >
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden absolute w-full bg-white border-t border-gray-100 transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100 shadow-lg" : "max-h-0 opacity-0 overflow-hidden"}`}>
        <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col items-center">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2 text-base font-medium transition-colors ${isActive ? "text-secondary font-bold" : "text-gray-600 hover:text-primary"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <a
            href="https://wa.me/573000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 px-6 py-2 bg-secondary text-white rounded-full font-bold hover:bg-terracotta transition-colors w-full text-center"
          >
            Contactar por WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
