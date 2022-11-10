/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "rgba(56, 65, 93, 0.602109)",
      hoverPagination: "#55699E",
      white: "#ffffff",
      purple: "#3f3cbb",
      navPaginate: "#7D859C",
      metal: "#565584",
      tahiti: "#3ab7bf",
      silver: "#ecebff",
      "bubble-gum": "#ff77e9",
      bermuda: "#78dcca",
    },
    extend: {},
  },
  images: {
    domains: ["picsum.photos"],
  },
  plugins: [],
};
