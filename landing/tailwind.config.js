/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        cosmic: {
          void: '#0A0A0F',
          depth: '#13131A',
          surface: '#1C1C26',
        },
        moonlight: {
          primary: '#F7F3E9',
          secondary: '#EDE7D3',
          muted: '#D4CDB7',
        },
        accent: {
          primary: '#C8A882',
          interactive: '#E6D0B3',
        },
      },
      fontFamily: {
        serif: ['Lora', 'serif'],
        sans: ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
