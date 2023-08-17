/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#FD5631",
        primaryDark: "#FD390E",
      },
    },
  },
  plugins: [],
};
