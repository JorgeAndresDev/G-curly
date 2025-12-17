import { useState } from "react";

const RoutineCard = ({ routine }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="bg-white dark:bg-deep-green rounded-xl shadow-sm border border-gray-100 dark:border-primary/20 overflow-hidden transition-all duration-300 hover:shadow-md">
            <div className={`relative h-48 overflow-hidden ${isExpanded ? 'h-64' : ''} transition-all duration-500`}>
                <img
                    src={routine.image}
                    alt={routine.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute top-2 left-2 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {routine.category}
                </div>
            </div>

            <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-primary dark:text-white mb-3">{routine.title}</h3>

                {!isExpanded ? (
                    <>
                        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">{routine.excerpt}</p>
                        <button
                            onClick={() => setIsExpanded(true)}
                            className="text-secondary font-bold text-sm hover:text-terracotta transition-colors flex items-center gap-1 group"
                        >
                            LEER MÁS
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </button>
                    </>
                ) : (
                    <div className="animate-fadeIn">
                        <div className="space-y-3 text-gray-700 dark:text-gray-300 text-sm mb-6">
                            {routine.content.map((paragraph, index) => (
                                <p key={index} className="leading-relaxed">
                                    {paragraph.startsWith("**") || paragraph.includes("**") ? (
                                        <span dangerouslySetInnerHTML={{
                                            __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<strong class="text-primary dark:text-secondary">$1</strong>')
                                        }} />
                                    ) : (
                                        paragraph
                                    )}
                                </p>
                            ))}
                        </div>
                        <button
                            onClick={() => setIsExpanded(false)}
                            className="text-gray-400 font-semibold text-xs hover:text-dark transition-colors flex items-center gap-1"
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

export default RoutineCard;
