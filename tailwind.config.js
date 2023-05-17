/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        pressed:"#98722a",
        hover: "#bb8e34",
        border:"#f5e3bf",
        surface:"#f9f5ed",
        main:"#e1ab3f",
        mainGray:"#333",
        mainBg: "#222",
        textGray:"#999"
      },
    },
  },
  plugins: [],
}
