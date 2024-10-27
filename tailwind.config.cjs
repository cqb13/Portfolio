/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Mukta', 'sans-serif']
      },
      colors: {
        highlight: '#496BBE'
      }
    }
  },
  plugins: []
}
