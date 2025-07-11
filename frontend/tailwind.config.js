/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#E91E63",  // magenta
          secondary: "#3F51B5", // azul
          accent: "#FFC107",    // amarillo
          success: "#4CAF50",   // verde
          info: "#9C27B0",       // púrpura
        },
      },
    },
  },
  plugins: [],
}