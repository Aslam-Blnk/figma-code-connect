import theme from './lib/tailwind.theme'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: ['class'],
  theme: { ...theme },
  plugins: [require('tailwindcss-animate'), require('./lib/styles.js')],
}
