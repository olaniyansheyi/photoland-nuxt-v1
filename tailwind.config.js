/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        mainSlider: "url('~/public/mainSlider_bg.png')",
      },
      colors: {
        body: "#1D1F23",
        primary: "#151618",
        accent: {
          DEFAULT: "#F6CD46",
          hover: "#E1B72E",
        },
      },
    },
  },
  plugins: [],
};
