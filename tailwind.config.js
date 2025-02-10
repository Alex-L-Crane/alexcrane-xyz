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
