/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.{html,js}"],
  theme: {
    extend: {},
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      'upper-roman': 'upper-roman',
      'lower-roman': 'lower-roman',
      'lower-alpha': 'lower-alpha',
      'upper-alpha': 'upper-alpha',
    }
  },
  plugins: [],
}

