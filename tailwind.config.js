/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#102a43",
        sand: "#f7f4ed",
        gold: "#d99a32",
      },
      boxShadow: {
        soft: "0 18px 50px rgba(16, 42, 67, 0.10)",
      },
    },
  },
  plugins: [],
};
