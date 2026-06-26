import { Link } from "react-router-dom";
import Logo from "../../assets/Logo-g-curly.jpg";
import { CONTACT, BRAND } from "../../lib/constants";

const Footer = () => {
  return (
    <footer className="bg-primary text-accent pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">

          <div className="flex flex-col items-center md:items-start">
            <img
              src={Logo}
              alt={`${BRAND.name} Logo`}
              className="h-20 w-auto rounded-full mb-4 border-2 border-secondary"
            />
            <p className="text-sm opacity-80 mt-2 max-w-xs">
              {BRAND.description}
            </p>
          </div>

          <div className="flex flex-col space-y-3">
            <h4 className="font-bold text-secondary uppercase tracking-wider text-sm mb-2">Explora</h4>
            {[
              { label: "Inicio", path: "/" },
              { label: "Tienda", path: "/tienda" },
              { label: "Salón", path: "/salon" },
              { label: "Rutinas", path: "/rutinas" },
            ].map(({ label, path }) => (
              <Link key={path} to={path} className="hover:text-secondary transition-colors">
                {label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col space-y-3">
            <h4 className="font-bold text-secondary uppercase tracking-wider text-sm mb-2">Contacto</h4>
            <a
              href={CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary transition-colors"
            >
              WhatsApp: +57 {CONTACT.phone.slice(2)}
            </a>
            <span className="opacity-80">{CONTACT.location}</span>
          </div>
        </div>

        <div className="border-t border-accent/20 mt-12 pt-6 text-center text-xs opacity-60">
          <p>&copy; {new Date().getFullYear()} {BRAND.name}. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;