import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import Coil from "../ui/Coil";

const categories = [
  {
    title: "La Tienda",
    desc: "Nutrición, definición y accesorios para potenciar tus rizos.",
    link: "/tienda",
    cta: "Ver catálogo",
    bg: "bg-gradient-to-br from-caramelo to-mango",
    coil: "text-crema/35",
    ctaClass:
      "bg-crema text-cacao hover:bg-white focus-visible:ring-crema",
  },
  {
    title: "El Salón",
    desc: "Manos expertas que entienden y respetan tu cabello.",
    link: "/salon",
    cta: "Reservar cita",
    bg: "bg-gradient-to-br from-moca to-cacao",
    coil: "text-crema/25",
    ctaClass:
      "bg-caramelo text-crema hover:bg-mango focus-visible:ring-caramelo",
  },
];

const CategorySplit = () => {
  const reduce = useReducedMotion();

  return (
    <section className="grid md:grid-cols-2">
      {categories.map(({ title, desc, link, cta, bg, coil, ctaClass }, index) => (
        <motion.div
          key={title}
          initial={reduce ? false : { opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: index * 0.1 }}
          className={`group relative flex items-center justify-center overflow-hidden min-h-[480px] ${bg}`}
        >
          <div className="absolute inset-0 flex items-center justify-center transition-transform duration-[1200ms] ease-out group-hover:scale-110">
            <Coil
              className={`w-[26rem] max-w-full ${coil}`}
              strokeWidth={1.5}
            />
          </div>

          <div className="relative z-10 text-center p-12 flex flex-col items-center">
            <h2 className="text-5xl md:text-6xl font-display font-extrabold text-crema tracking-tight drop-shadow-sm">
              {title}
            </h2>
            <p className="mt-5 max-w-sm mx-auto text-lg text-crema/85 leading-relaxed">
              {desc}
            </p>
            <Link
              to={link}
              className={`mt-9 inline-flex items-center gap-2 rounded-full px-9 py-4 font-bold transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.98] ${ctaClass}`}
            >
              {cta}
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
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default CategorySplit;
