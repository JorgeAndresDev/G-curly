const FilterBar = ({ categories, selectedCategory, onSelectCategory }) => {
    return (
        <div className="flex flex-wrap gap-2 justify-center mb-10">
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => onSelectCategory(category)}
                    className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 border-2 ${selectedCategory === category
                        ? "bg-primary border-primary text-white shadow-md dark:bg-secondary dark:border-secondary"
                        : "bg-transparent border-gray-200 text-gray-600 hover:border-primary hover:text-primary dark:border-gray-600 dark:text-gray-300 dark:hover:border-secondary dark:hover:text-secondary"
                        }`}
                >
                    {category}
                </button>
            ))}
        </div>
    );
};

export default FilterBar;
