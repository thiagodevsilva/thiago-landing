import daisyui from "daisyui"

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts}"
  ],
  safelist: [
    { pattern: /^checkbox(-primary|-secondary|-accent|-neutral|-success|-warning|-error|-info)?$/ },
    { pattern: /^btn(-outline)?(-primary|-secondary|-accent|-neutral|-error|-info|-success|-warning)?(-sm|-xs|-lg)?$/ },
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0B1F33",
          muted: "#4A5D6E",
        },
        accent: {
          DEFAULT: "#0F766E",
          hover: "#0D9488",
          soft: "#CCFBF1",
        },
        base: "#F4F6F8",
      },
      fontFamily: {
        display: ["Syne", "system-ui", "sans-serif"],
        sans: ["Manrope", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["corporate"],
  },
}

