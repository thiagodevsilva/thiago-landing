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
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["corporate"],
  },
}

