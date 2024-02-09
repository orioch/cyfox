/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        prim: { default: "#f50f05", light: "#fb9f9b" },
        sec: "#0b0b0b",
        "custom-gray": "#cfcfcf",
      },
    },
  },
  plugins: [],
};
