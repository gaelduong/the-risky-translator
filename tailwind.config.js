/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        graybrown: '#676767',
        graybrown2: '#626262',
        olivedrab: '#c4c684',
        lightpurple: '#c0c4da',
        coolblue: '#5375a9'
      }
    }
  },
  plugins: []
}
