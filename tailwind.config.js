/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns:{
        "2-12rem":"repeat(2, minmax(0, 12rem))",
        "3-12rem":"repeat(3, minmax(0, 12rem))",
        "4-12rem":"repeat(4, minmax(0, 12rem))"
      }
    },
  },
  plugins: [],
}
