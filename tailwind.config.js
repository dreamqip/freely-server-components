const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/layouts/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'radial-gradient':
          'radial-gradient(farthest-side at 73% 21%, transparent, rgb(12, 12, 12))',
        'text-gradient-1': 'linear-gradient(to left, #7928CA, #FF0080)',
        'text-gradient-2': 'linear-gradient(to left, #FF4D4D, #F9CB28)',
        'text-gradient-3': 'linear-gradient(to left, #007CF0, #00DFD8)',
      },
      backgroundColor: {
        'dark-90': '#00000090',
        'white-90': '#ffffff90',
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)', ...fontFamily.sans],
      },
      colors: {
        'dark-theme': '#000000',
        'primary-dark': '#BB86FC',
        'primary-500': '#6200EE',
        'primary-700': '#3700B3',
        secondary: '#03DAC5',
        red: '#FF0000',
      },
      screens: {
        xs: '390px',
      },
      flex: {
        '0-auto': '0 0 auto',
      },
      keyframes: {
        shimmer: {
          '100%': {
            transform: 'translateX(100%)',
          },
        },
        translateXReset: {
          '100%': {
            transform: 'translateX(0)',
          },
        },
        fadeToTransparent: {
          '0%': {
            opacity: 1,
          },
          '40%': {
            opacity: 1,
          },
          '100%': {
            opacity: 0,
          },
        },
      },
    },
  },
  important: true,
  darkMode: 'class',
};
