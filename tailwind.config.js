/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'cart': '#F5F1EE',
        'icon': '#875541',
        'heart': '#FFF0F0',
        'heart-text': '#D46F77',
        'save': '#3A4980',
        'save-bg': '#EDF0F8',
        'white-circle': '#CDCDCD',
        'orange': '#FFAC3C',
        'cyan': '#0078B5',
      },
      width: {
        'img': "587px",
        'text': '528px',
      },
      height: {
        'img': "691px",
      },
      gap: {
        '12': '12px',
      }
    },
  },
  plugins: [],
}

