/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        terminal: {
          bg: '#0a0a0f',
          card: '#14141e',
          border: '#2a2a3a',
          green: '#7bed9f',
          blue: '#70a5ff',
          purple: '#b388ff',
          orange: '#ffab5e',
          red: '#ff6b6b',
          gray: '#8a8a9a',
        }
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
}