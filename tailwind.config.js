/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0467b1',
          'blue-dark': '#035a9e',
          'blue-darker': '#024d8a',
          'blue-light': '#e8f3fc',
          red: '#c20000',
          gold: '#f7e400',
          'gold-dark': '#d4c300',
          'off-white': '#f7f9fb',
          text: '#111111',
          'text-mid': '#444444',
          'text-light': '#777777',
          border: '#e0e8f0',
        },
      },
      fontFamily: {
        bebas: ['var(--font-bebas)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
