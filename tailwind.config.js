/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // This matches all HTML, JS, JSX, TS, and TSX files in the src directory and its subdirectories
  ],
  theme: {
    colors: {},
  },
  daisyui: {
    themes: [
      "autumn",
      "bumblebee",
      {
        mytheme: {
          primary: "#dcedc9",
          secondary: "#f6d860",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
