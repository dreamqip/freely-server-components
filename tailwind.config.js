const { screens, flex, fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/layouts/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'radial-gradient':
          'radial-gradient(farthest-side at 73% 21%, transparent, rgb(12, 12, 12))',
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)', ...fontFamily.sans],
      },
      colors: {
        'dark-theme': '#121212',
        'primary-dark': '#BB86FC',
        'primary-500': '#6200EE',
        'primary-700': '#3700B3',
        secondary: '#03DAC5',
      },
    },
    screens: {
      xs: '390px',
      ...screens,
    },
    flex: {
      '0-auto': '0 0 auto',
      ...flex,
    },
  },
  important: true,
  darkMode: 'class',
};
