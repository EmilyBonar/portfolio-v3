import type { Config } from 'tailwindcss';

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './data/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // or 'media' or 'class',
  theme: {
    extend: {
      keyframes: {
        appear: {
          '0%': {
            opacity: '0',
            transform: 'translateY(9rem)',
          },
          '100%': {
            opacity: '0.9',
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        appear: 'appear 800ms ease both',
      },
    },
  },
} satisfies Config;
