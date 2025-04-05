/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        background: "#030014",
        primary: "#1E1A78",
        secondary: "#0F0D23",
        accent: "#FF6F61",
        text: "#FFFFFF",
        border: "#E0E0E0",
      },
    },
  },
  plugins: [],
};
