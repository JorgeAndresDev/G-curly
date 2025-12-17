import { useState } from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import FilterBar from "../components/FilterBar";

const Store = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  // Extract unique categories from products
  const categories = ["Todos", ...new Set(products.map(p => p.category))];

  const filteredProducts = selectedCategory === "Todos"
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-accent py-12 px-6 dark:bg-dark transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary dark:text-secondary mb-4">Nuestra Tienda</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Productos seleccionados con amor para nutrir, definir y proteger tus rizos.
          </p>
        </header>

        <FilterBar
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            No se encontraron productos en esta categoría.
          </div>
        )}
      </div>
    </div>
  );
};

export default Store;
