import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <section className="relative w-full h-[80vh] flex items-center justify-center bg-dark overflow-hidden text-accent">
            {/* Background Overlay - Replace with an actual image later */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-dark/90 z-10"></div>

            {/* Background Image Placeholder */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1595166687498-8e69d3000965?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 grayscale mix-blend-multiply"></div>

            <div className="relative z-20 text-center max-w-4xl px-6">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight drop-shadow-lg">
                    Disfruta tus texturas
                </h1>
                <p className="text-xl md:text-2xl mb-10 font-light max-w-2xl mx-auto opacity-90 leading-relaxed">
                    Especialistas en el cuidado y amor por el cabello crespo, rizado y afro.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        to="/tienda"
                        className="px-8 py-3 bg-secondary text-white rounded-full font-semibold hover:bg-white hover:text-secondary transition-all duration-300 transform hover:scale-105 shadow-lg border-2 border-transparent"
                    >
                        Ver Productos
                    </Link>
                    <Link
                        to="/salon"
                        className="px-8 py-3 bg-transparent border-2 border-accent text-accent rounded-full font-semibold hover:bg-accent hover:text-dark transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                        Agendar Cita
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
