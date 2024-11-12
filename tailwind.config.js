/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "custom-blue": "rgba(10, 51, 122, 1)",
        "icon-color": "rgba(178, 178, 178, 1)",
        "icon-text": "rgba(104, 104, 104, 1)",
        "Search-background": "rgba(250, 250, 250, 1)",
        "placeholder-text": " rgba(179, 179, 179, 1)",
        "search-border": "rgba(224, 224, 224, 1)",
        "light-pink": "rgba(255, 239, 231, 1)",
        "light-red": "rgba(255, 81, 81, 1)",
        "very-light-pink": "rgba(253, 235, 249, 1)",
        "light-blue": "rgba(232, 240, 251, 1)",
        "medium-blue": "rgba(55, 134, 241, 1)",
        "dark-grey": "rgba(104, 104, 104, 1)",
        "dark-blue": "rgba(27, 32, 74, 1)",
        "very-dark-blue": "rgba(22, 30, 84, 1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      screens: {
        md: { max: "840px" },
      },
    },
  },
  plugins: [],
};
