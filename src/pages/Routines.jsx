import { routines } from "../data/routines";
import RoutineCard from "../components/RoutineCard";

const Routines = () => {
  return (
    <div className="min-h-screen bg-accent/30 dark:bg-dark py-12 px-6 transition-colors duration-300">
      <header className="text-center mb-16 max-w-3xl mx-auto">
        <span className="text-secondary font-bold tracking-widest uppercase text-sm block mb-3">Blog Educativo</span>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary dark:text-secondary mb-6">Aprende a Cuidar tu Corona</h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg font-light">
          Consejos, trucos y guías paso a paso para que te conviertas en experta(o) de tu propio cabello.
        </p>
      </header>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
        {routines.map(routine => (
          <RoutineCard key={routine.id} routine={routine} />
        ))}
      </div>

      <div className="mt-20 text-center">
        <p className="text-gray-500 italic">
          ¿Tienes dudas sobre tu rutina? <a href="https://wa.me/573000000000" className="text-secondary underline hover:text-terracotta">Escríbenos al WhatsApp</a>
        </p>
      </div>
    </div>
  );
};

export default Routines;
