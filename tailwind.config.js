/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
