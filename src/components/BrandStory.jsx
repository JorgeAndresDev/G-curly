const BrandStory = () => {
    return (
        <section className="py-20 px-6 bg-accent text-dark dark:bg-dark dark:text-accent transition-colors duration-300">
            <div className="max-w-5xl mx-auto text-center">
                <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">Nuestra Esencia</span>
                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-primary dark:text-secondary">
                    Más que un estilo, una identidad
                </h2>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="text-left space-y-6 text-lg leading-relaxed">
                        <p>
                            En <span className="font-bold text-primary dark:text-secondary">G-Curly</span>, celebramos la belleza natural de tus rizos. Nacimos con la misión de empoderar a cada persona para que ame y cuide su cabello tal como es.
                        </p>
                        <p>
                            Aunque nuestra marca tiene un enfoque femenino, somos un espacio <span className="font-bold text-secondary">100% inclusivo</span>. Hombres y mujeres con cabello afro y rizado encuentran aquí su refugio de cuidado profesional.
                        </p>
                    </div>
                    <div className="relative">
                        {/* Visual element representing inclusion/texture */}
                        <div className="aspect-square rounded-full bg-primary/20 dark:bg-primary/40 absolute -top-4 -right-4 w-full h-full z-0"></div>
                        <div className="relative z-10 bg-white dark:bg-deep-green p-8 rounded-2xl shadow-xl border-l-4 border-secondary transition-colors duration-300">
                            <h3 className="text-2xl font-bold mb-2 text-dark dark:text-gray-100">Enfoque Dual</h3>
                            <ul className="space-y-4 text-left mt-4 text-gray-700 dark:text-gray-300">
                                <li className="flex items-start gap-3">
                                    <span className="text-secondary text-2xl">🛍️</span>
                                    <div>
                                        <strong className="block text-primary dark:text-secondary">Tienda Especializada</strong>
                                        Productos seleccionados para hidratación y definición.
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-secondary text-2xl">✂️</span>
                                    <div>
                                        <strong className="block text-primary dark:text-secondary">Salón Profesional</strong>
                                        Expertos en cortes, tratamientos y styling.
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BrandStory;
