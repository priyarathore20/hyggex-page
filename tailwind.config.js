/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      bgGradientDeg: {
        180: '180deg',
        223: '223deg',
      },
      fontFamily: {
        sans: 'Inter',
        montserrat: 'Montserrat',
        lato: 'Lato',
      },
      fontSize: {
        32: '2rem',
        28: '1.75rem',
      },
      spacing: {
        '1272': '79.5rem',
      },
      colors: {
        'background-color': '#F9F9F9',
        'primary-blue': '#06286E',
        'secondary-blue': '#164EC0',
        'primary-text': '#3A3740',
        'secondary-text': '#696671',
        'quiz-text': '#202B37',
        'accordion-border': '#217EEC',
        'accordion-text': '#28262C'
      },
      borderRadius: {
        '4xl': '32px',
        42.5: '42.5px',
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'bg-gradient': (angle) => ({
            'background-image': `linear-gradient(${angle}, var(--tw-gradient-stops) 100%)`,
          }),
        },
        {
          values: Object.assign(theme('bgGradientDeg', {}), {
            10: '10deg',
            15: '15deg',
            20: '20deg',
            25: '25deg',
            30: '30deg',
            45: '45deg',
            60: '60deg',
            90: '90deg',
            120: '120deg',
            135: '135deg',
            180: '180deg',
            223: '223deg',
          }),
        }
      );
    }),
  ],
};
