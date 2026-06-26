import { motion } from "framer-motion";
import { BRAND } from "../../lib/constants";

const features = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    title: "Tienda Especializada",
    desc: "Productos seleccionados para hidratación y definición.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
      </svg>
    ),
    title: "Salón Profesional",
    desc: "Expertos en cortes, tratamientos y styling.",
  },
];

const BrandStory = () => {
  return (
    <section className="py-24 md:py-36 px-6 bg-accent dark:bg-dark transition-colors duration-300 relative overflow-hidden">
      {/* Parallax background elements */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.05, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-secondary rounded-full blur-[120px] pointer-events-none will-change-transform transform-gpu" 
      />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-secondary font-black tracking-[0.3em] uppercase text-xs block mb-4">
            Nuestra Esencia
          </span>
          <h2 className="text-5xl md:text-7xl font-serif font-bold text-primary dark:text-accent leading-tight">
            Más que un estilo,
            <br />
            <span className="text-secondary">una identidad</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8 text-xl leading-relaxed text-gray-600 dark:text-gray-300 will-change-transform transform-gpu"
          >
            <p className="font-light">
              En{" "}
              <span className="font-bold text-primary dark:text-secondary">
                {BRAND.name}
              </span>
              , celebramos la belleza natural de tus rizos. Nacimos con la misión
              de empoderar a cada persona para que ame y cuide su cabello tal como
              es.
            </p>
            <p className="font-light">
              Aunque nuestra marca tiene un enfoque femenino, somos un espacio{" "}
              <span className="relative inline-block">
                <span className="relative z-10 font-bold text-secondary">100% inclusivo</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-secondary/10 -rotate-1"></span>
              </span>
              . Hombres y mujeres con cabello afro y rizado encuentran aquí su
              refugio de cuidado profesional.
            </p>
          </motion.div>

          <div className="space-y-6">
            {features.map(({ icon, title, desc }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30, x: 20 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group flex items-start gap-6 p-8 bg-white dark:bg-deep-green/50 backdrop-blur-sm rounded-3xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-white/5 hover:border-secondary/20 dark:hover:border-secondary/20 hover:-translate-y-2"
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-secondary/10 dark:bg-secondary/20 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-500 transform group-hover:rotate-6">
                  {icon}
                </div>
                <div>
                  <strong className="block text-primary dark:text-accent font-bold text-2xl mb-2 font-serif">
                    {title}
                  </strong>
                  <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed font-light">
                    {desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;