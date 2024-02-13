const { COLORS } = require("./src/utils/constants");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        prim: { default: COLORS.PRIM.DEFAULT, light: COLORS.PRIM.LIGHT },
        sec: COLORS.SEC,
        "custom-gray": "#cfcfcf",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
