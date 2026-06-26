const FilterBar = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="flex flex-wrap gap-2.5 justify-center mb-12">
      {categories.map((category) => {
        const isActive = selectedCategory === category;
        return (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 border-2 ${
              isActive
                ? "bg-primary border-primary text-white shadow-lg dark:bg-secondary dark:border-secondary scale-105"
                : "bg-transparent border-gray-200 text-gray-500 hover:border-primary hover:text-primary dark:border-gray-600 dark:text-gray-400 dark:hover:border-secondary dark:hover:text-secondary"
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