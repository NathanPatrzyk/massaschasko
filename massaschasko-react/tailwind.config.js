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
      gridTemplateColumns: {
        responsive: "repeat(auto-fit, minmax(240px, 1fr))",
      },
      screens: {
        xs: "320px",
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

      nhoquerecheadodecarnemoida400g:
        "url('/nhoquerecheadodecarnemoida400g.webp')",
      nhoquerecheadodefrango1kg: "url('/nhoquerecheadodefrango1kg.webp')",
      nhoquerecheadodequeijo1kg: "url('/nhoquerecheadodequeijo1kg.webp')",
      nhoquetradicional400g: "url('/nhoquetradicional400g.webp')",

      pieroguedebatata400g: "url('/pieroguedebatata400g.webp')",
      pieroguedebatatacombacon400g: "url('/pieroguedebatatacombacon400g.webp')",
      pieroguedebatataecarnedesfiada400g:
        "url('/pieroguedebatataecarnedesfiada400g.webp')",
      pieroguedecalabresa400g: "url('/pieroguedecalabresa400g.webp')",
      pieroguedeespinafre400g: "url('/pieroguedeespinafre400g.webp')",
      pieroguedefrango400g: "url('/pieroguedefrango400g.webp')",
      pieroguedepizza400g: "url('/pieroguedepizza400g.webp')",
      pieroguetradicional2kg: "url('/pieroguetradicional2kg.webp')",
    },
  },
  plugins: [],
};
