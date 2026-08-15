/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        violet: {
          400: '#a78bfa',
          500: '#7c3aed',
        },
        cyan: {
          400: '#22d3ee',
        },
      },
    },
  },
  plugins: [],
};