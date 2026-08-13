import { Link } from "react-router-dom";
import Logo from "../../assets/Logo-g-curly.jpg";
import { CONTACT, BRAND } from "../../lib/constants";
import Coil from "../ui/Coil";

const Footer = () => {
  return (
    <footer className="bg-cacao text-crema pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3">
              <img
                src={Logo}
                alt={`${BRAND.name} Logo`}
                className="h-16 w-auto rounded-full border-2 border-mango"
              />
              <Coil className="w-10 h-10 text-mango" strokeWidth={1.5} />
            </div>
            <p className="text-sm opacity-80 mt-4 max-w-xs leading-relaxed">
              {BRAND.description}
            </p>
          </div>

          <div className="flex flex-col space-y-3">
            <h4 className="font-bold text-mango uppercase tracking-widest text-sm mb-2">
              Explora
            </h4>
            {[
              { label: "Inicio", path: "/" },
              { label: "Tienda", path: "/tienda" },
              { label: "Salón", path: "/salon" },
              { label: "Rutinas", path: "/rutinas" },
            ].map(({ label, path }) => (
              <Link
                key={path}
                to={path}
                className="opacity-90 hover:text-mango transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col space-y-3">
            <h4 className="font-bold text-mango uppercase tracking-widest text-sm mb-2">
              Contacto
            </h4>
            <a
              href={CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-90 hover:text-mango transition-colors"
            >
              WhatsApp: +57 {CONTACT.phone.slice(2)}
            </a>
            <span className="opacity-80">{CONTACT.location}</span>
          </div>
        </div>

        <div className="border-t border-crema/15 mt-12 pt-6 text-center text-xs opacity-60">
          <p>
            &copy; {new Date().getFullYear()} {BRAND.name}. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
