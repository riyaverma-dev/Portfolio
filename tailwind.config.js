/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        coral: {
          50: '#fff5f3',
          100: '#ffe8e4',
          200: '#ffd2c9',
          300: '#ffb3a0',
          400: '#ff8a66',
          500: '#ff7f50',
          600: '#ed5a2b',
          700: '#c84620',
          800: '#a5391f',
          900: '#873020',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};