import { motion, useReducedMotion } from "framer-motion";
import { BRAND } from "../../lib/constants";
import Coil from "../ui/Coil";
import SectionRule from "../ui/SectionRule";

const features = [
  {
    title: "Tienda Especializada",
    desc: "Productos seleccionados para hidratación, nutrición y definición de tu tipo de rizo.",
  },
  {
    title: "Salón Profesional",
    desc: "Cortes y tratamientos hechos a mano, entendiendo tu estructura natural.",
  },
];

const BrandStory = () => {
  const reduce = useReducedMotion();

  return (
    <section className="relative py-24 md:py-32 px-6 bg-crema overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-3 text-caramelo font-bold tracking-[0.3em] uppercase text-xs">
            <Coil className="w-6 h-6" strokeWidth={1.5} />
            Nuestra esencia
          </span>
          <h2 className="mt-5 text-4xl md:text-6xl font-display font-extrabold text-cacao leading-tight tracking-tight">
            Más que un estilo,
            <br />
            <span className="text-caramelo">una identidad</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          <motion.div
            initial={reduce ? false : { opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-7 text-lg leading-relaxed text-moca"
          >
            <p>
              En{" "}
              <span className="font-bold text-cacao">{BRAND.name}</span>,
              celebramos la belleza natural de tus rizos. Nacimos con la misión
              de empoderar a cada persona para que ame y cuide su cabello tal
              como es.
            </p>
            <p>
              Aunque nuestra marca tiene un enfoque femenino, somos un espacio{" "}
              <span className="relative inline-block font-bold text-caramelo">
                <span className="relative z-10">100% inclusivo</span>
                <Coil
                  className="absolute -bottom-2 left-0 w-full h-auto text-caramelo/60"
                  strokeWidth={1.5}
                />
              </span>
              . Hombres y mujeres con cabello afro y rizado encuentran aquí su
              refugio de cuidado profesional.
            </p>
          </motion.div>

          <div className="lg:pt-4">
            {features.map(({ title, desc }, index) => (
              <motion.div
                key={title}
                initial={reduce ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className={`flex items-start gap-5 py-7 ${
                  index === 0 ? "border-b border-caramelo/20" : ""
                }`}
              >
                <span className="mt-1 flex-shrink-0 text-caramelo">
                  <Coil className="w-9 h-9" strokeWidth={1.75} />
                </span>
                <div>
                  <h3 className="text-2xl font-display font-bold text-cacao">
                    {title}
                  </h3>
                  <p className="mt-1.5 text-moca leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <SectionRule className="mt-20 md:mt-24" />
      </div>
    </section>
  );
};

export default BrandStory;
