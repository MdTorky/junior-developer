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
        'radio': "#F3F3F3",
        'radio-selected': "#EDF0F8",
        'radio-text': "#3A4980",
        'add-to-cart': '#1D364D',
        'delivery': '#D75951',
        'description': '#164C96',
        'red': '#BB0043',
        'purple': '#5D21B7',
        'black-color': '#000000',
      },
      width: {
        'img': "587px",
        'text': '528px',
        'products': "115px",
        'images': "520px",
        '90%': '90%',
        '10px': '20px',
        '1200': '1200px',
        '800': "800px"
      },
      height: {
        'img': "691px",
        'products': "115px",
        '515': "515px",

      },
      gap: {
        '12': '12px',
      },
      spacing: {
        '5px': '5px',
      }
    },
  },
  plugins: [],
}

