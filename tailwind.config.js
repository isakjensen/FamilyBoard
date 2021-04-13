const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        darkGray: colors.trueGray,
        cyan: colors.cyan,
        boxGray: '#191919'
      },
      fontSize: {
        'full': '100%'
      },
      borderWidth: {
        '3': '3px',
        '5': '5px',
        '6': '6px',
        '7': '7px'
      } 
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
