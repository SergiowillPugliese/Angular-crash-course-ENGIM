/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#505050',
        'secondary': {
          100: '#E2E2D5',
          200: '#888883',
        },
        'danger': '#FF6363',
      },
      fontFamily: {
        body: ['Nunito']
      }
    },
  },
  plugins: [],
}

