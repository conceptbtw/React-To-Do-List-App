/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
      colors: {
        text: "#FFFFFF",
        bg: "#100020",
        primary: "#FF379B",
        secondary: "#9B37FF",
        accent: "",
        delete: "#FF0000",
      },
    },
  },
  plugins: [],
};
