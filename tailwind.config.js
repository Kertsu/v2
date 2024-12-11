/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "custom-dark": "#121212",
      },
      textColor: {
        "custom-primary": "#39FF14",
        "custom-secondary": "#b3b3b3",
      },
      fontFamily: {
        "custom-sans": ["Inter", "sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
