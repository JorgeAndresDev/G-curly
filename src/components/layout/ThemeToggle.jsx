import { useTheme } from "../../hooks";

const ThemeToggle = ({ isAtTop = false }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`p-2.5 rounded-full transition-all duration-500 group relative overflow-hidden ${
        isAtTop 
          ? theme === "light" ? "hover:bg-primary/5" : "hover:bg-white/10" 
          : "hover:bg-secondary/10 dark:hover:bg-white/5"
      }`}
      aria-label={theme === "light" ? "Activar modo oscuro" : "Activar modo claro"}
    >
      <div className="relative z-10 font-bold">
        {theme === "light" ? (
          <svg
            className={`w-5 h-5 transition-all duration-500 transform group-hover:rotate-[15deg] group-hover:scale-110 ${
              isAtTop 
                ? theme === "light" ? "text-primary" : "text-white" 
                : "text-primary dark:text-yellow-500"
            }`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        ) : (
          <svg
            className="w-5 h-5 text-yellow-400 transition-all duration-500 transform group-hover:rotate-90 group-hover:scale-110"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        )}
      </div>
      <div className={`absolute inset-0 bg-secondary/5 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full`}></div>
    </button>
  );
};

export default ThemeToggle;