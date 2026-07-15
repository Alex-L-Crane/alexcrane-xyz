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
        'muted-ink': '#5A554D',
        // Section background "stocks" -- named page-root colors. Add a new
        // stock here (one line) when a future page needs its own section
        // background, rather than typing a raw hex on the page root.
        'stock-blush': '#F6D9CE',
        'stock-yellow': '#F5D37D',
        'stock-chartreuse': '#D8F172',
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

