/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "custom-dark": "#121212",
      },
      textColor: {
        // "custom-primary": "#39FF14", green
        "custom-primary": "#007bff",
        "custom-secondary": "#b3b3b3",
      },
      fontFamily: {
        "custom-sans": ["Inter", "sans-serif"],
      },
      backgroundImage: {
        'custom-gradial': 'linear-gradient(to bottom, rgba(0, 123, 255, 1) 0%,rgba(121, 186, 255, 1) 100%)'
      }
    },
  },
  darkMode: "class",
  plugins: [],
};
