/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      colors:{
        'pink':'#F8605F',
        'brown':'#F3D7CA',
        'lightbrown':'#FFF8E3',
        'lighterbrown':'#F5EEE6'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

