/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./src/**/*.{js,jsx,ts,tsx,vue}', './public/index.html'],
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}", // Ensure Vue files are included
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'almost-black': '#1c1c1c',
        'punk-yellow': '#FBC028',
      },
      keyframes: {
        'bounce-once': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
      animation: {
        'bounce-once': 'bounce-once 0.4s ease-out forwards',
        'bounce-once-delay-150': 'bounce-once 0.4s ease-out forwards 150ms',
        'bounce-once-delay-300': 'bounce-once 0.4s ease-out forwards 300ms',
      }
    },
    safelist: [
      'bg-red-500', 'text-white', 'p-6', // Add common classes here
    ],
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

