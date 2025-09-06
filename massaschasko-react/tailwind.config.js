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

      pieroguedebatata400g: "url('/pieroguedebatata400g.webp')",
      pieroguedebatataebacon400g: "url('/pieroguedebatataebacon400g.webp')",
      pieroguedebatataefrango400g: "url('/pieroguedebatataefrango400g.webp')",
      pieroguedebatataecarnedesfiada400g:
        "url('/pieroguedebatataecarnedesfiada400g.webp')",
      pieroguedebatataerepolho400g: "url('/pieroguedebatataerepolho400g.webp')",
      pieroguedebatataerucula400g: "url('/pieroguedebatataerucula400g.webp')",
      pieroguedecalabresa400g: "url('/pieroguedecalabresa400g.webp')",
      pieroguedeespinafrericotaebrocolis400g:
        "url('/pieroguedeespinafrericotaebrocolis400g.webp')",
      pieroguedefeijaoebacon400g: "url('/pieroguedefeijaoebacon400g.webp')",
      pieroguedepizza400g: "url('/pieroguedepizza400g.webp')",
      pieroguederequeijaoericota400g:
        "url('/pieroguederequeijaoericota400g.webp')",
      pieroguedericotacomtomateseco400g:
        "url('/pieroguedericotacomtomateseco400g.webp')",
      pieroguetradicional400g: "url('/pieroguetradicional400g.webp')",

      pieroguedebatata2kg: "url('/pieroguedebatata2kg.webp')",
      pieroguedebatataebacon2kg: "url('/pieroguedebatataebacon2kg.webp')",
      pieroguedebatataefrango2kg: "url('/pieroguedebatataefrango2kg.webp')",
      pieroguedecalabresa2kg: "url('/pieroguedecalabresa2kg.webp')",
      pieroguederequeijaoericota2kg:
        "url('/pieroguederequeijaoericota2kg.webp')",
      pieroguetradicional2kg: "url('/pieroguetradicional2kg.webp')",

      minipieroguedebacon1kg: "url('/minipieroguedebacon1kg.webp')",
      minipieroguedecalabresa1kg: "url('/minipieroguedecalabresa1kg.webp')",
      minipieroguedecarnedesfiada1kg:
        "url('/minipieroguedecarnedesfiada1kg.webp')",
      minipieroguedeespinafrericotaebrocolis1kg:
        "url('/minipieroguedeespinafrericotaebrocolis1kg.webp')",
      minipieroguedefrango1kg: "url('/minipieroguedefrango1kg.webp')",
      minipieroguederequeijao1kg: "url('/minipieroguederequeijao1kg.webp')",
      minipieroguetradicional1kg: "url('/minipieroguetradicional1kg.webp')",

      nhoquetradicional400g: "url('/nhoquetradicional400g.webp')",
      nhoquerecheadodecarnemoida400g:
        "url('/nhoquerecheadodecarnemoida400g.webp')",
      nhoquerecheadodefrango400g: "url('/nhoquerecheadodefrango400g.webp')",
      nhoquerecheadodequeijo400g: "url('/nhoquerecheadodequeijo400g.webp')",

      nhoquetradicional1kg: "url('/nhoquetradicional1kg.webp')",
      nhoquedeespinafre1kg: "url('/nhoquedeespinafre1kg.webp')",
      nhoquerecheadodecarnemoida1kg:
        "url('/nhoquerecheadodecarnemoida1kg.webp')",
      nhoquerecheadodefrango1kg: "url('/nhoquerecheadodefrango1kg.webp')",
      nhoquerecheadodequeijo1kg: "url('/nhoquerecheadodequeijo1kg.webp')",

      croissantdecarnemoida350g: "url('/croissantdecarnemoida350g.webp')",
      croissantdefrango350g: "url('/croissantdefrango350g.webp')",
      croissantdepizza350g: "url('/croissantdepizza350g.webp')",
      croissantdepalmito350g: "url('/croissantdepalmito350g.webp')",
      croissantdebananacomcanela350g:
        "url('/croissantdebananacomcanela350g.webp')",
      croissantdechocolatepreto350g:
        "url('/croissantdechocolatepreto350g.webp')",

      croissantdecarnemoida12kg: "url('/croissantdecarnemoida12kg.webp')",
      croissantdefrango12kg: "url('/croissantdefrango12kg.webp')",
      croissantdepizza12kg: "url('/croissantdepizza12kg.webp')",
      croissantdechocolatepreto12kg:
        "url('/croissantdechocolatepreto12kg.webp')",

      esfihadecarnemoida350g: "url('/esfihadecarnemoida350g.webp')",
      esfihadefrango350g: "url('/esfihadefrango350g.webp')",
      esfihadepizza350g: "url('/esfihadepizza350g.webp')",
      esfihadepalmito350g: "url('/esfihadepalmito350g.webp')",
      esfihadecostela350g: "url('/esfihadecostela350g.webp')",
      esfihamultigraos350g: "url('/esfihamultigraos350g.webp')",

      esfihadecarnemoida12kg: "url('/esfihadecarnemoida12kg.webp')",
      esfihadefrango12kg: "url('/esfihadefrango12kg.webp')",

      esfihaabertadecarnemoida400g: "url('/esfihaabertadecarnemoida400g.webp')",
      esfihaabertadefrango400g: "url('/esfihaabertadefrango400g.webp')",
      esfihaabertadepizza400g: "url('/esfihaabertadepizza400g.webp')",
      esfihaabertadecostela400g: "url('/esfihaabertadecostela400g.webp')",
      esfihaabertadechocolatepreto400g:
        "url('/esfihaabertadechocolatepreto400g.webp')",

      paodequeijocomcheddar500g: "url('/paodequeijocomcheddar500g.webp')",
      paodequeijocomvinagrete500g: "url('/paodequeijocomvinagrete500g.webp')",
      paodequeijotradicional500g: "url('/paodequeijotradicional500g.webp')",

      charutoderepolho400g: "url('/charutoderepolho400g.webp')",
      churrosdedocedeleitecomchocolate400g:
        "url('/churrosdedocedeleitecomchocolate400g.webp')",
      coxinhadefrangoecatupiry400g: "url('/coxinhadefrangoecatupiry400g.webp')",
      kiberecheado400g: "url('/kiberecheado400g.webp')",
      macarraotalharim400g: "url('/macarraotalharim400g.webp')",

      churrosdedocedeleitecomchocolate1kg:
        "url('/churrosdedocedeleitecomchocolate1kg.webp')",
      coxinhadefrangoecatupiry1kg: "url('/coxinhadefrangoecatupiry1kg.webp')",
      kiberecheado1kg: "url('/kiberecheado1kg.webp')",

      hamburgao12kg: "url('/hamburgao12kg.webp')",
      hotdog12kg: "url('/hotdog12kg.webp')",
    },
  },
  plugins: [],
};
