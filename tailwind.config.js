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
      "title-jobs-color": "#3f3cbb",
      "jobs-color-text": "#878D9D",
      bg: "#F5F5F5",
      navPaginate: "#7D859C",
      "job-text-color": "#3A4562",
      "btn-bg-apply-color": "#384564",
      "btn-text-color-employ": "#55699E",
      "btn-text-color-benefit": "#988B49",
      "job-discription-color": "rgba(56, 65, 93, 0.82)",
      "bg-contacts": "#2A3047",
      "text-color-contacts": "#E7EAF0",
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      proximanova: ["proximanova_bold", "sans-serif"],
    },
    extend: {},
  },
  images: {
    domains: ["picsum.photos"],
  },
  plugins: [],
};
