/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#386641", // Dark Green (Main Text)
        secondary: "#AA8F59", // Gold/Bronze (CTA)
        terracotta: "#A65640", // Terracotta (Alternative CTA)
        accent: "#F8F8F8", // Neutral (Backgrounds/Light elements)
        dark: "#26482e", // A darker shade of primary for contrast/depth if needed, or just standard text
        "deep-green": "#0A150A", // Almost black green
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
}
