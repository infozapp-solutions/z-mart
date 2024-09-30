/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryHeader: '#0f5c9b',
        secondaryHeader: '#0084b8',
        themeColorThree: '#00a9b9',
        themeColorFour: '#00caa2',
        themeColorGreen: '#8ee682',
        themeColorYellow: '#f9f871',
        errorText: '#dc2625',
      },
      screens: {
        'xxs': '500px'
      }
    },
  },
  plugins: [],
}

