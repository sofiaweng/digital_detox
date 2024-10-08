/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        customGray: "#F7F7F7",
        customBlue: "#073852",
        customPink: "#E7639B",
        customBlueLight: "#386989",
      },
      boxShadow: {
        'white-glow': '0 4px 6px rgba(255, 255, 255, 0.5)', // Tilføj den hvide skygge her
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/container-queries"),
  ],
};
