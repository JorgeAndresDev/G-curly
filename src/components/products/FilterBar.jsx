const FilterBar = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="flex flex-wrap gap-2.5 justify-center mb-12">
      {categories.map((category) => {
        const isActive = selectedCategory === category;
        return (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 border-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-caramelo focus-visible:ring-offset-2 ${
              isActive
                ? "bg-caramelo border-caramelo text-crema shadow-lg scale-105"
                : "bg-transparent border-cacao/20 text-moca hover:border-caramelo hover:text-caramelo"
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default FilterBar;
