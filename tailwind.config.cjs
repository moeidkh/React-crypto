/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        loading: {
          "0%": { transform: 'translateY(0)' },
          "50%": { transform: 'translateY(-20px)' },
          "100%": { transform: 'translateY(0)' }
        }
      },
      animation: "loading 1.5s linear infinite"
    },
  },
  plugins: [],
}
