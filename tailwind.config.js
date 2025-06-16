/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // 👈 obligatoire pour App Router
    "./components/**/*.{js,ts,jsx,tsx}", // 👈 si tu utilises un dossier components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
