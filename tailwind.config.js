/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    container: {
      padding: '1rem',
      center: true,
      screens: {
        lg: "1224px",
        xl: "1224px",
        "2xl": "1224px",
      }
    },
    extend: {},
  },
  plugins: [],
}