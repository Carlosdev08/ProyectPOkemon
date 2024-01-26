/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    
    extend: {
      colors: {
        'custom-green': '#4da799',
        'card-blue': '#4d8fa6',
        'cistom-Yellow':'#d8bb65',
        'custom-white':'#eeeeee',
      },
      fontFamily: {
        'outfit': ['Outfit', 'sans-serif'],
      },
    },
  },
  width: {
    'card': '16rem',
  },
  height: {
    'card': '5rem',
  },
  spacing: {
    '128': '32rem',
  },
  plugins: [],



}

