import { routines } from "../data/routines";
import RoutineCard from "../components/routines/RoutineCard";
import { WHATSAPP_MESSAGE } from "../lib/constants";

const Routines = () => {
  return (
    <div className="min-h-screen bg-accent/30 dark:bg-dark py-16 md:py-24 px-6 transition-colors duration-300">
      <header className="text-center mb-16 max-w-3xl mx-auto">
        <span className="text-secondary font-bold tracking-widest uppercase text-sm block mb-4">
          Blog Educativo
        </span>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary dark:text-secondary mb-6">
          Aprende a Cuidar tu Corona
        </h1>
        <p className="text-gray-500 dark:text-gray-400 text-lg font-light leading-relaxed">
          Consejos, trucos y guías paso a paso para que te conviertas en experta(o) de tu propio cabello.
        </p>
      </header>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
        {routines.map((routine) => (
          <RoutineCard key={routine.id} routine={routine} />
        ))}
      </div>

      <div className="mt-20 text-center">
        <p className="text-gray-500 dark:text-gray-400 italic">
          ¿Tienes dudas sobre tu rutina?{" "}
          <a
            href={WHATSAPP_MESSAGE("Hola, tengo dudas sobre mi rutina capilar")}
            className="text-secondary font-semibold underline hover:text-terracotta transition-colors"
          >
            Escríbenos al WhatsApp
          </a>
        </p>
      </div>
    </div>
  );
};

export default Routines;