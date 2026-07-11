/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}", // Ensure Vue files are included
  ],
  theme: {
    extend: {
      colors: {
        'almost-black': '#1c1c1c',
        'punk-yellow': '#FBC028',
        'highlight': '#f2695c',
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
  },
  plugins: [],
}

