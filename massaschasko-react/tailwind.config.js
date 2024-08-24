/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Montserrat",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
    },
    backgroundImage: {
      home: "url('/home.webp')",

      post1: "url('/post1.webp')",
      post2: "url('/post2.webp')",
      post3: "url('/post3.webp')",
      post4: "url('/post4.webp')",
      post5: "url('/post5.webp')",
      post6: "url('/post6.webp')",
      post7: "url('/post7.webp')",
      post8: "url('/post8.webp')",
      post9: "url('/post9.webp')",

      pierogues: "url('/pierogues.webp')",
      nhoques: "url('/nhoques.webp')",
    },
  },
  plugins: [],
};
