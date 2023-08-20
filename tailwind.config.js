/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#e2e2e2",
        lightBlue: "#94b0f5",
      },
      fontFamily: {
        primary: "roboto, sans-serif",
        primaryBold: "roboto-bold, sans-serif",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [],
};
