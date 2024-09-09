/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF851B',  
        secondary: '#2D2D2D',  
        third: '#A9A9A9',
      },
    },
  },
  plugins: [],
}