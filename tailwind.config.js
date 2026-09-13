/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#0F1116",
          900: "#14161D",
          800: "#1B1E27",
          700: "#242833",
          600: "#323744",
          500: "#454B5A",
          400: "#6B7080",
          300: "#9098AA",
          200: "#C4C9D4",
          100: "#E6E8EE",
        },
        paper: {
          50: "#FAF9F6",
          100: "#F3F1EB",
          200: "#E8E5DC",
        },
        signal: {
          DEFAULT: "#4F7CFF",
          light: "#7B9EFF",
          dark: "#3A5FDB",
        },
        pulse: {
          DEFAULT: "#B6FF3C",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      maxWidth: {
        content: "72rem",
      },
      boxShadow: {
        card: "0 1px 2px rgba(15, 17, 22, 0.06), 0 8px 24px -8px rgba(15, 17, 22, 0.12)",
        "card-dark": "0 1px 2px rgba(0, 0, 0, 0.3), 0 12px 32px -12px rgba(0, 0, 0, 0.5)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
      },
      animation: {
        float: "float 5s ease-in-out infinite",
        blink: "blink 1s step-start infinite",
      },
    },
  },
  plugins: [],
};
