import { services } from "../data/services";
import ServiceCard from "../components/ServiceCard";

const Salon = () => {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-dark transition-colors duration-300">
      {/* Header / Hero for Salon */}
      <header className="bg-primary text-accent py-20 px-6 text-center dark:bg-gray-900">
        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">Nuestro Salón</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 font-light">
          Un espacio diseñado exclusivamente para consentir y realzar la belleza de tus rizos.
        </p>
      </header>

      {/* Services List */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 gap-8">
          {services.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Final CTA */}
        <div className="mt-20 text-center bg-white dark:bg-deep-green p-10 rounded-2xl shadow-sm border border-secondary/20 dark:border-secondary/40 transition-colors duration-300">
          <h2 className="text-2xl font-bold text-dark dark:text-white font-serif mb-3">¿No sabes qué necesita tu cabello?</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">Escríbenos y te asesoramos para elegir el tratamiento ideal.</p>
          <a
            href="https://wa.me/573000000000"
            className="inline-block bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-dark dark:bg-secondary dark:hover:bg-terracotta transition-colors shadow-lg"
          >
            Solicitar Asesoría
          </a>
        </div>
      </div>
    </div>
  );
};

export default Salon;
