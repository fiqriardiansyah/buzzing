/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#39352D",
        secondary: "#FAF3E1",
        "primary-yellow": "#FBE051"
      },
      fontFamily: {
        jakarta: ["Plus Jakarta Sans", "sans-serif"]
      }
    },
  },
  plugins: [],
}