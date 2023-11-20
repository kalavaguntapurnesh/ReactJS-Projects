/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: '#1a2b6d',
        footer: '#EAEAEA'
      }
    },
  },
  plugins: [],
}

