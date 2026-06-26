/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#386641",
        secondary: "#AA8F59",
        terracotta: "#A65640",
        accent: "#F8F8F8",
        dark: "#26482e",
        "deep-green": "#0A150A",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
};