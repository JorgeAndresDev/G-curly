/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        arena: "#F4E9D8",
        cacao: "#21140B",
        caramelo: "#C9742F",
        mango: "#E9A13B",
        moca: "#6B4527",
        crema: "#FFF9EF",
      },
      fontFamily: {
        display: ["'Bricolage Grotesque'", "sans-serif"],
        sans: ["'Instrument Sans'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
