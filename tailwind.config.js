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
        // muted-ink and link-red are CSS-variable-backed (RGB channels, not a
        // hex string, so Tailwind's opacity modifiers like /40 keep working)
        // so a dark stock can override them for everything nested inside it
        // -- see :root and .bg-stock-ink in main.css -- without any
        // component threading a dark/light prop. Defaults live at :root.
        'muted-ink': 'rgb(var(--muted-ink-rgb) / <alpha-value>)',
        'link-red': 'rgb(var(--link-red-rgb) / <alpha-value>)',
        // Section background "stocks" -- named page-root colors. Add a new
        // stock here (one line) when a future page needs its own section
        // background, rather than typing a raw hex on the page root.
        'stock-blush': '#F6D9CE',
        'stock-yellow': '#F5D37D',
        'stock-chartreuse': '#D8F172',
        'stock-coral': '#FA8072',
        'stock-ink': '#1c1c1c',
        'stock-paper': '#FFFFFF',
        'stock-colophon': '#D3D7D2',
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

