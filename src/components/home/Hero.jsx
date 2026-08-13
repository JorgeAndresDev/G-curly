import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { BRAND } from "../../lib/constants";
import Coil from "../ui/Coil";

const TEXTURES = ["Onda", "Rizo", "Crespo", "Afro"];

const Hero = () => {
  const reduce = useReducedMotion();

  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-arena">
      {/* Static warm washes — no scattered motion */}
      <div
        aria-hidden="true"
        className="absolute -top-40 -right-40 w-[42rem] h-[42rem] rounded-full bg-mango/25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-52 -left-52 w-[40rem] h-[40rem] rounded-full bg-caramelo/20 blur-3xl"
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 py-24 md:py-16 grid lg:grid-cols-[1.15fr_1fr] items-center gap-14 lg:gap-8">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="font-display font-extrabold text-cacao tracking-tight leading-[0.92] text-[17vw] sm:text-7xl lg:text-6xl xl:text-[5.5rem]">
            Disfruta
            <span className="block text-caramelo">tus texturas</span>
          </h1>

          <p className="mt-7 max-w-md text-lg text-moca leading-relaxed">
            Especialistas en el cuidado y amor por el cabello crespo, rizado y
            afro. Productos, salón y rutinas para que ames tu textura tal como
            es.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-7">
            <Link
              to="/tienda"
              className="inline-flex items-center gap-2 rounded-full bg-caramelo px-8 py-4 font-bold text-crema shadow-[0_16px_32px_-14px_rgba(201,116,47,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-mango focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-caramelo focus-visible:ring-offset-2 focus-visible:ring-offset-arena active:scale-[0.98]"
            >
              Ver la tienda
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
            <Link
              to="/salon"
              className="group inline-flex items-center gap-2 font-bold text-moca underline decoration-caramelo/50 decoration-2 underline-offset-8 transition-colors hover:text-caramelo focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-caramelo rounded-sm"
            >
              Agendar cita en el salón
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>

          <div className="mt-16 max-w-md" aria-hidden="true">
            <div className="flex justify-between text-[10px] font-bold uppercase tracking-[0.25em] text-moca/70">
              {TEXTURES.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            <div className="mt-2.5 h-3 rounded-full bg-gradient-to-r from-mango via-caramelo to-cacao" />
            <p className="mt-2 text-xs text-moca/70">
              Cuidamos cada tipo de rizo, de la onda suave al afro apretado.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative hidden lg:flex items-center justify-center"
        >
          <Coil
            className="w-full max-w-[34rem] text-caramelo"
            strokeWidth={1.75}
            animate
            duration={2}
          />
          <div className="absolute -bottom-2 left-8 rounded-full bg-crema px-5 py-2 text-sm font-bold text-cacao shadow-[0_10px_30px_-12px_rgba(33,20,11,0.35)]">
            {BRAND.name}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
