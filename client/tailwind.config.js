/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        himalayanDark: '#0B1528',
        goldAccent: '#F59E0B',
        brandNav: '#07101E'
      }
    },
  },
  plugins: [],
}
