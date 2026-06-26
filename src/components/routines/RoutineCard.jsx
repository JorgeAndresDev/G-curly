import { memo, useState } from "react";
import GradientPlaceholder from "../ui/GradientPlaceholder";

const RoutineCard = ({ routine }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="group bg-white dark:bg-deep-green rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100 dark:border-primary/10 hover:border-secondary/20 dark:hover:border-terracotta/30 flex flex-col hover:-translate-y-1">
      <div className={`relative overflow-hidden transition-all duration-500 ${isExpanded ? "h-72" : "h-48"}`}>
        <GradientPlaceholder
          preset="product3"
          aspectRatio=""
          icon="📖"
          label={routine.category}
        />
        <div className="absolute top-3 left-3 bg-secondary text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
          {routine.category}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-lg font-serif font-bold text-primary dark:text-white mb-3 group-hover:text-secondary transition-colors duration-300">
          {routine.title}
        </h3>

        {!isExpanded ? (
          <>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 flex-grow leading-relaxed">
              {routine.excerpt}
            </p>
            <button
              onClick={() => setIsExpanded(true)}
              className="text-secondary font-bold text-sm hover:text-terracotta transition-all duration-300 flex items-center gap-1 group/btn self-start"
            >
              LEER MÁS
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </>
        ) : (
          <div className="animate-[fadeIn_0.3s_ease-out]">
            <div className="space-y-3 text-gray-600 dark:text-gray-300 text-sm mb-6">
              {routine.content.map((paragraph, index) => (
                <p key={index} className="leading-relaxed">
                  {paragraph.includes("**") ? (
                    <span
                      dangerouslySetInnerHTML={{
                        __html: paragraph.replace(
                          /\*\*(.*?)\*\*/g,
                          '<strong class="text-primary dark:text-secondary font-semibold">$1</strong>'
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
              className="text-gray-400 font-semibold text-xs hover:text-dark dark:hover:text-white transition-colors flex items-center gap-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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