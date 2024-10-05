/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'Space Grotesk': ['Space Grotesk', 'sans-serif']
      },
      colors: {
        blue: '#3014BA',
        'blue-light': '#392C7A',
        'bg-admin': '#fbfbfb'
      },
      screens: {
        'sm-md': '900px',
      }
    }
  },
  plugins: []
}
