import { useState } from "react";
import { products } from "../data/products";
import ProductCard from "../components/products/ProductCard";
import FilterBar from "../components/products/FilterBar";

const Store = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const categories = ["Todos", ...new Set(products.map((p) => p.category))];

  const filteredProducts =
    selectedCategory === "Todos"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-accent dark:bg-dark transition-colors duration-300">
      <header className="py-16 md:py-20 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(170,143,89,0.06),transparent_70%)]" />
        <div className="relative z-10">
          <span className="text-secondary font-bold tracking-widest uppercase text-xs md:text-sm block mb-4">
            Productos seleccionados
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary dark:text-secondary mb-4">
            Nuestra Tienda
          </h1>
          <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto leading-relaxed">
            Productos seleccionados con amor para nutrir, definir y proteger tus rizos.
          </p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <FilterBar
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            <p className="text-lg">No se encontraron productos en esta categoría.</p>
            <button
              onClick={() => setSelectedCategory("Todos")}
              className="mt-4 text-secondary font-semibold hover:underline"
            >
              Ver todos los productos
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Store;