import { memo } from "react";
import { WHATSAPP_MESSAGE } from "../../lib/constants";
import GradientPlaceholder from "../ui/GradientPlaceholder";

const ServiceCard = ({ service }) => {
  const whatsappLink = WHATSAPP_MESSAGE(
    `Hola, quisiera agendar una cita para: ${service.name}`
  );

  return (
    <div className="group bg-white dark:bg-deep-green rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100 dark:border-primary/10 hover:border-secondary/20 dark:hover:border-terracotta/30 flex flex-col md:flex-row hover:-translate-y-1">
      <div className="md:w-2/5 relative overflow-hidden">
        <GradientPlaceholder
          preset="secondary"
          aspectRatio="aspect-[4/3] md:aspect-auto md:h-full md:min-h-[220px]"
          icon="✂️"
          label="Servicio"
        />
        <div className="absolute top-3 left-3 bg-dark/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full">
          {service.duration}
        </div>
      </div>

      <div className="p-6 md:w-3/5 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-primary dark:text-white font-serif mb-3 group-hover:text-secondary transition-colors duration-300">
            {service.name}
          </h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4">
            {service.description}
          </p>
        </div>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="self-start inline-flex items-center gap-2 text-secondary font-bold text-sm tracking-wider hover:text-terracotta transition-all duration-300 group/link"
        >
          <span>AGENDAR CITA</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default memo(ServiceCard);