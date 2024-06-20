/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#141519",
        lgrey: "#232a32",
        dgrey: "#171e26",
        txt: "#6a717b",
        bubble: "#262f38",
        orange: "#fc7613",
      }
    },
  },
  plugins: [],
}

