import { services } from "../data/services";
import ServiceCard from "../components/services/ServiceCard";
import { WHATSAPP_MESSAGE } from "../lib/constants";

const Salon = () => {
  return (
    <div className="min-h-screen bg-accent dark:bg-dark transition-colors duration-300">
      <header className="relative bg-primary dark:bg-deep-green text-accent py-24 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(170,143,89,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(166,86,64,0.1),transparent_50%)]" />
        <div className="relative z-10">
          <span className="text-secondary/80 font-bold tracking-widest uppercase text-sm block mb-4">
            Un espacio para ti
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">
            Nuestro Salón
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 font-light">
            Un espacio diseñado exclusivamente para consentir y realzar la belleza de tus rizos.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-accent dark:from-dark to-transparent" />
      </header>

      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="mt-20 text-center bg-white dark:bg-deep-green p-10 rounded-2xl shadow-lg border border-secondary/10 dark:border-secondary/20 transition-colors duration-300">
          <h2 className="text-2xl font-bold text-dark dark:text-white font-serif mb-3">
            ¿No sabes qué necesita tu cabello?
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-6">
            Escríbenos y te asesoramos para elegir el tratamiento ideal.
          </p>
          <a
            href={WHATSAPP_MESSAGE("Hola, necesito asesoría para mi cabello")}
            className="inline-block bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-dark dark:bg-secondary dark:hover:bg-terracotta transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Solicitar Asesoría
          </a>
        </div>
      </div>
    </div>
  );
};

export default Salon;