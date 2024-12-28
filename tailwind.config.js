/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors:{
          green:{
            500: '#41873F',
            900 :'#088632'
          }, 
          tdesc:'#4A5568'
        }
    },
  },
  plugins: [],
}