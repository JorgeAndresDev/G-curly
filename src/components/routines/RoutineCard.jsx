import { memo, useState } from "react";
import GradientPlaceholder from "../ui/GradientPlaceholder";

const RoutineCard = ({ routine }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="group bg-crema rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden border border-cacao/10 hover:border-caramelo/40 flex flex-col hover:-translate-y-1">
      <div className={`relative overflow-hidden transition-all duration-500 ${isExpanded ? "h-72" : "h-48"}`}>
        <GradientPlaceholder
          preset="product3"
          aspectRatio=""
          label={routine.category}
        />
        <div className="absolute top-3 left-3 bg-caramelo text-crema text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
          {routine.category}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-lg font-display font-bold text-cacao mb-3 group-hover:text-caramelo transition-colors duration-300">
          {routine.title}
        </h3>

        {!isExpanded ? (
          <>
            <p className="text-moca text-sm mb-4 flex-grow leading-relaxed">
              {routine.excerpt}
            </p>
            <button
              onClick={() => setIsExpanded(true)}
              className="text-caramelo font-bold text-sm hover:text-mango transition-all duration-300 flex items-center gap-1 group/btn self-start"
            >
              LEER MÁS
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </>
        ) : (
          <div className="animate-[fadeIn_0.3s_ease-out]">
            <div className="space-y-3 text-moca text-sm mb-6">
              {routine.content.map((paragraph, index) => (
                <p key={index} className="leading-relaxed">
                  {paragraph.includes("**") ? (
                    <span
                      dangerouslySetInnerHTML={{
                        __html: paragraph.replace(
                          /\*\*(.*?)\*\*/g,
                          '<strong class="text-caramelo font-semibold">$1</strong>'
                        ),
                      }}
                    />
                  ) : (
                    paragraph
                  )}
                </p>
              ))}
            </div>
            <button
              onClick={() => setIsExpanded(false)}
              className="text-moca/60 font-semibold text-xs hover:text-cacao transition-colors flex items-center gap-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
              Ocultar detalles
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default memo(RoutineCard);
