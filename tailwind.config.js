/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#2E86DE',
          light: '#74B9FF',
        },
        accent: {
          pink: '#F8A5C2',
          yellow: '#F6E58D',
        },
        text: {
          dark: '#2D3436',
          light: '#636E72',
        },
      },
    },
  },
  plugins: [],
};