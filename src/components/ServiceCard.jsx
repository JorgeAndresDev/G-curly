const ServiceCard = ({ service }) => {
    const phoneNumber = "573000000000";
    const message = `Hola, quisiera agendar una cita para: ${service.name}`;
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <div className="bg-white dark:bg-deep-green rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100 dark:border-primary/20 flex flex-col md:flex-row group">
            {/* Image Section */}
            <div className="md:w-1/3 h-48 md:h-auto overflow-hidden relative">
                <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-2 left-2 bg-dark/80 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
                    {service.duration}
                </div>
            </div>

            {/* Content Section */}
            <div className="p-6 md:w-2/3 flex flex-col justify-between">
                <div>
                    <h3 className="text-xl font-bold text-primary dark:text-white font-serif mb-2 group-hover:text-secondary transition-colors">
                        {service.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                        {service.description}
                    </p>
                </div>

                <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="self-start inline-flex items-center gap-2 text-secondary font-bold text-sm tracking-wider hover:text-terracotta transition-colors border-b-2 border-transparent hover:border-terracotta pb-0.5"
                >
                    AGENDAR CITA
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </a>
            </div>
        </div>
    );
};

export default ServiceCard;
