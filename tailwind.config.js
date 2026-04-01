/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#aa3bff",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#aa3bff",
          "primary-focus": "#9028e3",
          "primary-content": "#ffffff",
          "secondary": "#6b6375",
          "secondary-focus": "#5a5764",
          "secondary-content": "#ffffff",
          "accent": "#aa3bff",
          "accent-focus": "#9028e3",
          "accent-content": "#ffffff",
          "neutral": "#08060d",
          "neutral-focus": "#000000",
          "neutral-content": "#f3f4f6",
          "base-100": "#ffffff",
          "base-200": "#f9fafb",
          "base-300": "#f3f4f6",
          "base-content": "#1f2937",
          "info": "#2563eb",
          "success": "#10b981",
          "warning": "#f59e0b",
          "error": "#ef4444",
        }
      }
    ],
  },
}
