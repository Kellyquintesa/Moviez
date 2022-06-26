/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },

    extend: {
      colors: {
        navy: "#181A20",
        input: "#1F222A",
        red: "#C1232F",
        white: "#ffffff",
      },
    },
  },
  plugins: [],
};
