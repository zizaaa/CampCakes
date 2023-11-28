/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        'pink':'#FF8F8F',
        'lightYellow':'#EEF296',
        'lightGreen':'#9ADE7B',
        'green':'#508D69'
      },
      colors:{
        'pink':'#FF8F8F',
        'lightYellow':'#EEF296',
        'lightGreen':'#9ADE7B',
        'green':'#508D69',
        'black':'rgba(0,0,0,0.8)'
      }
    },
  },
  plugins: [],
}

