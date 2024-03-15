/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        lightGray: "#DDDDDD",
        secondry: "#F2F2F2",
        white: "#ffffff",
      },
    },
    container: {
      center: true,
      padding: "20px",
    },
  },
  plugins: [],
};
