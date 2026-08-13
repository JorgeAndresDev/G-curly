import { services } from "../data/services";
import ServiceCard from "../components/services/ServiceCard";
import { WHATSAPP_MESSAGE } from "../lib/constants";
import Coil from "../components/ui/Coil";

const Salon = () => {
  return (
    <div className="min-h-screen bg-arena">
      <header className="relative bg-cacao text-crema py-24 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,116,47,0.25),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(233,161,59,0.15),transparent_55%)]" />
        <div className="relative z-10">
          <span className="inline-flex items-center gap-3 text-mango font-bold tracking-widest uppercase text-sm block mb-4">
            <Coil className="w-6 h-6" strokeWidth={1.5} />
            Un espacio para ti
          </span>
          <h1 className="text-4xl md:text-6xl font-display font-extrabold tracking-tight mb-4">
            Nuestro Salón
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 leading-relaxed">
            Un espacio diseñado exclusivamente para consentir y realzar la
            belleza de tus rizos.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-arena to-transparent" />
      </header>

      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="mt-20 text-center bg-crema p-10 rounded-2xl shadow-lg border border-caramelo/20">
          <h2 className="text-2xl font-display font-bold text-cacao mb-3">
            ¿No sabes qué necesita tu cabello?
          </h2>
          <p className="text-moca mb-6">
            Escríbenos y te asesoramos para elegir el tratamiento ideal.
          </p>
          <a
            href={WHATSAPP_MESSAGE("Hola, necesito asesoría para mi cabello")}
            className="inline-block bg-caramelo text-crema px-8 py-3 rounded-full font-bold hover:bg-mango transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-caramelo focus-visible:ring-offset-2"
          >
            Solicitar Asesoría
          </a>
        </div>
      </div>
    </div>
  );
};

export default Salon;
