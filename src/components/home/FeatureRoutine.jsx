import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { routines } from "../../data/routines";
import Coil from "../ui/Coil";

const FeatureRoutine = () => {
  const reduce = useReducedMotion();
  const [featured] = routines;

  return (
    <section className="py-24 md:py-32 px-6 bg-arena">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={reduce ? false : { opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="order-2 lg:order-1"
        >
          <span className="inline-flex items-center gap-2 text-caramelo font-bold tracking-[0.3em] uppercase text-xs">
            <Coil className="w-6 h-6" strokeWidth={1.5} />
            Rutina del mes
          </span>
          <h2 className="mt-5 text-3xl md:text-5xl font-display font-extrabold text-cacao tracking-tight leading-tight">
            {featured.title}
          </h2>
          <p className="mt-5 text-lg text-moca leading-relaxed max-w-lg">
            {featured.excerpt}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <Link
              to="/rutinas"
              className="inline-flex items-center gap-2 rounded-full bg-cacao px-8 py-4 font-bold text-crema transition-all duration-300 hover:-translate-y-0.5 hover:bg-moca focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-caramelo focus-visible:ring-offset-2 focus-visible:ring-offset-arena active:scale-[0.98]"
            >
              Leer la rutina completa
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
            <span className="rounded-full border border-caramelo/40 px-5 py-2 text-xs font-bold uppercase tracking-widest text-caramelo">
              {featured.category}
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-1 lg:order-2 flex items-center justify-center"
          aria-hidden="true"
        >
          <Coil
            className="w-full max-w-[24rem] text-caramelo/70"
            strokeWidth={1.75}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureRoutine;
