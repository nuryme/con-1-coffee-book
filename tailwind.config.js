/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        banner: "url('./assets/banner.jpg')",
        nutrition: "url('./assets/nutrition.png')"
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

