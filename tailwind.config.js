/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        "light-purple": "#e9e1f8",
        "dark-purple": "#5a3e9c",
        "navbar-bg": "#f6f3fa",
        "text-gray": "#575656",
      },
      borderRadius: {
        large: "60%",
      },
    },
  },
  plugins: [],
};
