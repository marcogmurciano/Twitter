/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./assets/**/*.scss",  "./app/**/*.{js}"],
  theme: {
    fontFamily: {
      sans: ["'Source Sans Pro'", "sans-serif"]
    },
    fontSize: {
      base: ".95rem"
    },
    extend: {
      colors:{
        baco: "#000210"
      }
    },
  },
  plugins: [],
};
