/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        palanquin: ["Palanquin", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: "#6741d9",
        "primary-light": "#7950f2",
        text: "#dee2e6",
        "text-dark": "#adb5bd",
        "background-100": "#343a40",
        "background-500": "#2b3035",
        "background-900": "#212529",
        red: "#fa5252",
        "red-dark": "#e03131",
      },
    },
  },
  plugins: [],
};
