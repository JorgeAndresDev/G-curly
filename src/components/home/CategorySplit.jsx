import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import GradientPlaceholder from "../ui/GradientPlaceholder";

const categories = [
  {
    title: "La Tienda",
    desc: "Nutrición, definición y accesorios para potenciar tus rizos.",
    link: "/tienda",
    cta: "VER CATÁLOGO",
    preset: "primary",
    overlay: "from-primary/90 to-dark/95",
  },
  {
    title: "El Salón",
    desc: "Manos expertas que entienden y respetan tu cabello.",
    link: "/salon",
    cta: "RESERVAR CITA",
    preset: "secondary",
    overlay: "from-secondary/90 to-terracotta/95",
  },
];

const CategorySplit = () => {
  return (
    <section className="grid md:grid-cols-2 min-h-[600px] overflow-hidden">
      {categories.map(({ title, desc, link, cta, preset, overlay }, index) => (
        <motion.div
          key={title}
          initial={{ opacity: 0, x: index === 0 ? -100 : 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="group relative flex items-center justify-center overflow-hidden cursor-pointer min-h-[500px]"
        >
          <motion.div
            className="absolute inset-0 z-0 will-change-transform transform-gpu"
            whileHover={{ scale: 1.15 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <GradientPlaceholder
              preset={preset}
              aspectRatio=""
              className="!absolute inset-0"
            />
          </motion.div>
          
          <div
            className={`absolute inset-0 bg-gradient-to-br ${overlay} transition-all duration-700 opacity-80 group-hover:opacity-95 z-10`}
          />

          <motion.div 
            className="relative z-20 text-center p-12"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h2 
              className="text-5xl md:text-7xl font-bold mb-6 font-serif text-white drop-shadow-2xl tracking-tight"
            >
              {title}
            </motion.h2>
            <p className="mb-10 max-w-sm mx-auto text-xl text-white/90 leading-relaxed font-light">
              {desc}
            </p>
            <Link
              to={link}
              className="inline-block px-10 py-4 border border-white/30 bg-white/5 backdrop-blur-md text-white font-black tracking-widest text-xs hover:bg-white hover:text-dark transition-all duration-500 rounded-full shadow-2xl overflow-hidden relative group/btn"
            >
              <span className="relative z-10">{cta}</span>
              <div className="absolute inset-0 bg-white transform translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500"></div>
            </Link>
          </motion.div>
          
          {/* Decorative accent */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left z-30" />
        </motion.div>
      ))}
    </section>
  );
};

export default CategorySplit;