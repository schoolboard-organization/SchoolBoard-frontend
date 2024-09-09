/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // This matches all HTML, JS, JSX, TS, and TSX files in the src directory and its subdirectories
  ],
  theme: {
    colors: {},
  },
  daisyui: {
    themes: ["autumn", "bumblebee"],
  },
  plugins: [require("daisyui")],
};
