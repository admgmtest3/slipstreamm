/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#153A3A",
        accent: "#D25C31",
        background: "#F2F4F3",
        dark: "#111A18",
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "Outfit", "sans-serif"],
        drama: ["Cormorant Garamond", "serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },
    },
  },
  plugins: [],
}
