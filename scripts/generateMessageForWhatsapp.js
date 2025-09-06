function generateMessageForWhatsapp(product, weight) {
  let text = "Olá, estou interessado no produto: " + product + " " + weight;
  return encodeURI(text.trim().replace(/[\s]/g, "+"));
}

let product = "Nome do Produto";
let weight = "500g";

console.log(
  product +
    " + " +
    weight +
    " -> " +
    generateMessageForWhatsapp(product, weight)
);
