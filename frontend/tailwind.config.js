/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryHeader: '#0f5c9b',
        secondaryHeader: '#1f76bd',
        blue: '#1287e8',
        transparent: {
          blue: '#2076bd78',
          darkblue: '#0f5c9bd9'
        }
      },
      screens: {
        'xxs': '500px'
      }
    },
  },
  plugins: [],
}

