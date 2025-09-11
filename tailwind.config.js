/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        gray: '#2f2e2eff',
        primary: '#6d201c',
        secondary: '#8a3c32',
        accent: '#c2ac93',
        background: '#ddd0c2',
      },
      fontFamily: {
        anton: ['Anton', 'sans-serif'],
        publicsans: ['Public Sans', 'sans-serif'],
        publicsans_thin: ['Public Sans', 'sans-serif'], // Use font-thin
        publicsans_regular: ['Public Sans', 'sans-serif'], // Use font-normal
      },
    },
  },
  plugins: [],
}
