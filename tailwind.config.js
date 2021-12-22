module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "clr-black": "#0c0c0c",
        "clr-mid-black": "#191919",
        "clr-light-black": "#262626",
        "clr-whitesmoke": "#f5f5f5",
        "clr-orange": "#ED5E29",
      },
    },
    fontFamily: {
      Kameron: ["Kameron, sans-serif"],
    },
    container: {
      center: true,
      screens: {
        lg: "1536px",
        xl: "1536px",
        "2xl": "1536px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
