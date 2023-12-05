/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'gluten': ['Gluten', 'cursive'],
      'falcon':['Libre Franklin'],
      'sans': ['ui-sans-serif', 'system-ui',],
    },
    extend: {
      backgroundImage: {
        'heroimage': "url('./images/bg.png')",
      },
    },
  },
  plugins: [],
}