module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      grayscale: {
        15: "15%"
      }
    }
  },
  plugins: [require("@tailwindcss/typography")]
}
