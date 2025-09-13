/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#f2aa24',  
        secondary: '#d83832', 
        heading: '#4e1314',   
      },
      fontFamily: {
        // You can also extend other properties like fonts
        // sans: ['Inter', 'sans-serif'], 
      }
    },
  },
  plugins: [],
}