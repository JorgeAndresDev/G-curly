import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "../../assets/Logo-g-curly-solo.jpg";
import { useAtTop } from "../../hooks";
import { CONTACT, WHATSAPP_MESSAGE } from "../../lib/constants";

const NAV_LINKS = [
  { name: "Inicio", path: "/" },
  { name: "Tienda", path: "/tienda" },
  { name: "Salón", path: "/salon" },
  { name: "Rutinas", path: "/rutinas" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const isAtTop = useAtTop(20);
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const isTransparent = isAtTop && isHome;

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.45, ease: "easeInOut" }}
      className={`sticky top-0 z-50 transition-all duration-500 ${
        isTransparent
          ? "bg-transparent py-5"
          : "bg-crema/95 backdrop-blur-xl py-2 border-b border-cacao/10 shadow-[0_10px_30px_-18px_rgba(33,20,11,0.25)]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <Link to="/" className="flex-shrink-0 flex items-center group relative">
            <div className="absolute -inset-3 bg-mango/30 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <img
              className={`h-16 md:h-20 w-auto object-contain rounded-full transition-all duration-500 transform group-hover:scale-110 ${
                isTransparent ? "ring-1 ring-cacao/10" : "ring-2 ring-caramelo/30"
              }`}
              src={Logo}
              alt="G-Curly"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-10">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-bold tracking-[0.15em] uppercase transition-all duration-300 relative py-1 group ${
                    isActive ? "text-caramelo" : "text-cacao hover:text-caramelo"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{link.name}</span>
                    <span
                      className={`absolute -bottom-1 left-0 h-[2px] bg-caramelo transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}

            <a
              href={WHATSAPP_MESSAGE("Hola G-Curly!")}
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden group px-8 py-3 rounded-full bg-caramelo text-crema font-bold text-[10px] tracking-[0.2em] uppercase transition-all duration-500 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-caramelo focus-visible:ring-offset-2"
            >
              <span className="relative z-10">Contacto</span>
              <svg
                className="w-3.5 h-3.5 relative z-10 transition-transform duration-500 group-hover:translate-x-1"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              <div className="absolute inset-0 bg-white/20 transform -translate-x-[110%] group-hover:translate-x-[110%] transition-transform duration-1000 skew-x-12" />
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className={`p-2.5 rounded-xl transition-all duration-300 ${
                isTransparent ? "text-cacao bg-cacao/5" : "text-cacao bg-caramelo/10"
              }`}
              aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden absolute top-full left-0 w-full bg-crema backdrop-blur-2xl border-t border-cacao/10 transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[600px] opacity-100 shadow-2xl" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-10 space-y-2 flex flex-col items-center">
          {NAV_LINKS.map((link, index) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `w-full text-center py-5 text-xs font-bold tracking-[0.3em] uppercase transition-all rounded-2xl ${
                  isActive
                    ? "text-caramelo bg-caramelo/10"
                    : "text-cacao hover:text-caramelo active:bg-arena"
                }`
              }
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {link.name}
            </NavLink>
          ))}
          <a
            href={WHATSAPP_MESSAGE("Hola G-Curly!")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 w-full py-5 bg-caramelo text-crema rounded-2xl font-bold text-[10px] tracking-[0.3em] uppercase hover:bg-mango transition-all text-center shadow-xl active:scale-[0.98]"
          >
            Agendar Cita
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
