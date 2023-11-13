/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#00acff",

          "secondary": "#00a200",

          "accent": "#00b700",

          "neutral": "#131e2b",

          "base-100": "#e5ffff",

          "info": "#00b8ff",

          "success": "#00a77d",

          "warning": "#9e6100",

          "error": "#ff3a5c",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}