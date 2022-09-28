module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      grayscale: {
        25: "25%",
        75: "75%",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
