/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      // todos os Arquivos tsx
      './src/**/*.tsx',
    ],
    theme: {
      extend: {
       
        backgroundImage: {
          homeExemples: 'url(https://res.cloudinary.com/dydwaeqqy/image/upload/v1663809998/bg-image-examples_lv3ljs.png)'
        },
        fontFamily: {
          sans: 'Roboto, sans-serif',
        },
        
        colors: {
          "dark-purple": "#081A51",
          "light-white": "rgba(255,255,255,0.17)",
          green: {
            300: '#00B37E',
            500: '#38fcac',
            600: '#03db83',
            700: '#015F43',
          },
          blue: {
            500: '#81D8F7',
          },
          orange: {
            500: '#FBA94C',
          },
          red: {
            500: '#F75A68',
          },
          gray: {
            100: '#E1E1E6',
            200: '#C4C4CC',
            300: '#8D8D99',
            500: '#323238',
            600: '#29292E',
            700: '#121214',
            900: '#09090A',
          },
        },
      },
    },
    plugins: [],
  }
  