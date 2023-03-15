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
      },
      animation: {
        wiggle: 'wiggle 0.2s linear'
      },
      keyframes: {
        wiggle: {
          '0%': {
            transform: 'translate(0px, 0px)'
          },
          '30%': {
            transform: 'translate(-5px, -5px)'
          },
          '40%': {
            transform: 'translate(5px, 5px)'
          },
          '70%': {
            transform: 'translate(-5px, -5px)'
          },
          '80%': {
            transform: 'translate(5px, 5px)'
          },
          '100%': {
            transform: 'translate(0px, 0px) rotate(0deg)'
          }
        }
      },
      plugins: []
    }
  }
}
