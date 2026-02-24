/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        info: "var(--color-info)",
        gray1: "var(--color-gray1)",
        gray: "var(--color-gray)",
        gray2: "var(--color-gray2)",
        danger1: "var(--color-danger1)",
        danger2: "var(--color-danger2)",
      },
    },
  },
  plugins: [],
}
