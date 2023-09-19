/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
      screens: {
        mobile: "320px",
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
        "2xl": "1536px",
      },
      animation: {
        pulse: "pulse 2s cubic-bezier(0.2, 0, 0, 0) ;",
        bounce: "bounce 1s",
      },
    },
  },
  plugins: [],
};
