module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx,vue}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'almost-black': '#1c1c1c',
        'punk-yellow': '#FBC028',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}