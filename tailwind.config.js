/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        surface: "#111111",
        surfaceLight: "#1a1a1a",
        primary: "#3b82f6",
        secondary: "#8b5cf6",
        textPrimary: "#f3f4f6",
        textSecondary: "#9ca3af"
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Space Grotesk', 'monospace'],
      },
    },
  },
  plugins: [],
}
