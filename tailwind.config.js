/** @type {import('tailwindcss').Config} */
module.exports = {
  // darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        custom: {
          dark: "#111",
          light: "#fff"
        },
        primary: {
          dark: "#ffb400",
          light: "#72b626"
        },
        secondary: {
          dark: "#ffffff12",
          light: "#1e253012"
        },
        title: {
          light: "#666"
        },
        badge: {
					dark: "rgba(226, 232, 240, 0.16)",
				}
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "preloader-slide": {
          from: { transform: 'scaleY(0)' },
          to: { transform: 'scaleY(1)' }
        },
        "loader-running": {
          "0%": { transform: "scaleX(0)", transformOrigin: "left" },
          "49%": { transform: "scaleX(1)", transformOrigin: "left" },
          "50%": { transform: "scaleX(1)", transformOrigin: "right" },
          "100%": { transform: "scaleX(0)", transformOrigin: "right" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "preloader-slide": "preloader-slide 0.5s ease-in-out 0s 1 normal both",
        "loader-running": "loader-running 3s ease-in-out 1s infinite normal both"
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}