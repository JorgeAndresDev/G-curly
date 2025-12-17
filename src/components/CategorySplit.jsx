import { Link } from "react-router-dom";

const CategorySplit = () => {
    return (
        <section className="grid md:grid-cols-2 min-h-[600px]">
            {/* Store Side */}
            <div className="group relative h-full flex items-center justify-center overflow-hidden bg-primary text-white cursor-pointer">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526947425960-94dcfa63e553?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-40 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-dark/30 group-hover:bg-primary/40 transition-colors duration-500"></div>

                <div className="relative z-10 text-center p-8 transform transition-transform duration-500 group-hover:-translate-y-2">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif">La Tienda</h2>
                    <p className="mb-8 max-w-xs mx-auto text-lg opacity-90">Nutrición, definición y accesorios para potenciar tus rizos.</p>
                    <Link to="/tienda" className="inline-block px-8 py-3 border-2 border-white text-white font-bold tracking-wider hover:bg-white hover:text-primary transition-all duration-300">
                        VER CATÁLOGO
                    </Link>
                </div>
            </div>

            {/* Salon Side */}
            <div className="group relative h-full flex items-center justify-center overflow-hidden bg-secondary text-white cursor-pointer order-last md:order-none">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-40 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-dark/30 group-hover:bg-secondary/40 transition-colors duration-500"></div>

                <div className="relative z-10 text-center p-8 transform transition-transform duration-500 group-hover:-translate-y-2">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif">El Salón</h2>
                    <p className="mb-8 max-w-xs mx-auto text-lg opacity-90">Manos expertas que entienden y respetan tu cabello.</p>
                    <Link to="/salon" className="inline-block px-8 py-3 border-2 border-white text-white font-bold tracking-wider hover:bg-white hover:text-secondary transition-all duration-300">
                        RESERVAR CITA
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CategorySplit;
