function generateCategoryAndWeight(category, weight) {
  return category + " - " + weight;
}

let category = "Produto";
let weight = "500g";

console.log(
  category +
    " + " +
    weight +
    " -> " +
    generateCategoryAndWeight(category, weight)
);
