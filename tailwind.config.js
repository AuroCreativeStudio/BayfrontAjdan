/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
theme: {
  extend: {
    fontFamily: {
      ivy: ['IvyModeThin', 'sans-serif'],
      foco: ['Foco', 'sans-serif'],
    },
  },
},

  plugins: [],
}

