import { memo } from "react";
import { WHATSAPP_MESSAGE } from "../../lib/constants";
import GradientPlaceholder from "../ui/GradientPlaceholder";

const ServiceCard = ({ service }) => {
  const whatsappLink = WHATSAPP_MESSAGE(
    `Hola, quisiera agendar una cita para: ${service.name}`
  );

  return (
    <div className="group bg-crema rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden border border-cacao/10 hover:border-caramelo/40 flex flex-col md:flex-row hover:-translate-y-1">
      <div className="md:w-2/5 relative overflow-hidden">
        <GradientPlaceholder
          preset="secondary"
          aspectRatio="aspect-[4/3] md:aspect-auto md:h-full md:min-h-[220px]"
          label="Servicio"
        />
        <div className="absolute top-3 left-3 bg-cacao/80 backdrop-blur-sm text-crema text-xs px-3 py-1.5 rounded-full">
          {service.duration}
        </div>
      </div>

      <div className="p-6 md:w-3/5 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-display font-bold text-cacao mb-3 group-hover:text-caramelo transition-colors duration-300">
            {service.name}
          </h3>
          <p className="text-moca text-sm leading-relaxed mb-4">
            {service.description}
          </p>
        </div>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="self-start inline-flex items-center gap-2 text-caramelo font-bold text-sm tracking-wider hover:text-mango transition-all duration-300 group/link"
        >
          <span>AGENDAR CITA</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default memo(ServiceCard);
