const ProductCard = ({ product }) => {
    const phoneNumber = "573000000000"; // Replace with real number later
    const message = `Hola, estoy interesado en comprar ${product.name}`;
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <div className="bg-white dark:bg-deep-green rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col group border border-gray-100 dark:border-primary/20">
            <div className="relative h-64 overflow-hidden bg-gray-100 dark:bg-gray-900">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-2 right-2 bg-accent/90 dark:bg-dark/90 backdrop-blur-sm text-dark dark:text-accent text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {product.category}
                </div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-primary dark:text-white mb-2 font-serif">{product.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-grow line-clamp-2">{product.description}</p>

                <div className="mt-auto flex items-center justify-between">
                    <span className="text-xl font-bold text-dark dark:text-white">
                        ${product.price.toLocaleString()}
                    </span>
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-secondary text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-terracotta transition-colors flex items-center gap-2"
                    >
                        <span>Comprar</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
