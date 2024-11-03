/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        heading: ['Mukta', 'sans-serif']
      },
      screens: {
        xs: '450px',
        semiLg: '860px'
      },
      colors: {
        highlight: '#496BBE'
      }
    }
  },
  plugins: []
}
