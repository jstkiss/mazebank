/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      parablue: "#b8c1ec",
      btnbeige: "#eebbc3",
      customblue: "#14094f",
      white: "#fff",
      whitee: "#f3f4f5",
      black: "#000000",
      skyblue: "#5ADAE8",
      slate: colors.slate,
      gray: colors.gray,
      zinc: colors.zinc,
      neutral: colors.neutral,
      stone: colors.stone,
      red: colors.red,
      orange: colors.orange,
      amber: colors.amber,
      yellow: colors.yellow,
      lime: colors.lime,
      green: colors.green,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      sky: colors.sky,
      blue: colors.blue,
      indigo: colors.indigo,
      violet: colors.violet,
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      rose: colors.rose,
    },
    extend: {
      fontFamily: {
      mono: ["'DM Mono'", ...defaultTheme.fontFamily.mono]
      }
    },
  },
  plugins: [],
};
