export const generateSlug = (name: string) => {
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w ]+/g, "")
    .replace(/ +/g, "-");
};

export const generateImageName = (name: string, weight: string) => {
  return (
    name
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f,]/g, "")
      .replace(/[^\w ]+/g, "")
      .replace(/ +/g, "") +
    weight.toLowerCase().replace(/[\u0300-\u036f,]/g, "")
  );
};

export const generateDescription = (weight: string) => {
  return "Peso líquido: " + weight;
};

export const generateMessageForWhatsapp = (name: string, weight: string) => {
  let text = "Olá, estou interessado no produto: " + name + " " + weight;
  return encodeURI(text.trim().replace(/[\s]/g, "+"));
};

export const extractWeightFromSlug = (slug: string) => {
  const match = slug.match(/(\d+(?:kg|g))$/i);
  return match ? match[1].toLowerCase() : null;
};
