/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'space-cadet': '#262A56',
        'alloy-orange': '#B8621B',
        'dun': '#E3CCAE'
      },
      fontFamily: {
        oxygen: ['Oxygen', 'sans-serif']
      },
      backgroundImage: {
        'hero': "url('../public/images/dumbbells.jpg')"
      }
    },
  },
  plugins: [],
}

