import { Text } from "../../components/text";
import { Button } from "../../components/button";
import { Title } from "../../components/title";
import { Subtitle } from "../../components/subtitle";
import { Motion } from "../../components/motion";

const info = {
  porcoes_por_embalagem: 6,
  porcao: "60g (1 unidade)",
  valores: {
    "100g": {
      valor_energetico: 267,
      carboidratos: 41,
      acucares_totais: "",
      acucares_adicionados: 4.7,
      proteinas: 10,
      gorduras_totais: 6.8,
      gorduras_saturadas: 1.3,
      gorduras_trans: 0,
      fibras_alimentares: 1.3,
      sodio: 571,
    },
    "60g": {
      valor_energetico: 160,
      carboidratos: 25,
      acucares_totais: "",
      acucares_adicionados: 2.8,
      proteinas: 6.1,
      gorduras_totais: 4.1,
      gorduras_saturadas: 0.8,
      gorduras_trans: 0,
      fibras_alimentares: 0.8,
      sodio: 342,
    },
    "%VD*": {
      valor_energetico: 8,
      carboidratos: 8,
      acucares_totais: "",
      acucares_adicionados: 6,
      proteinas: 12,
      gorduras_totais: 6,
      gorduras_saturadas: 4,
      gorduras_trans: 0,
      fibras_alimentares: 3,
      sodio: 17,
    },
  },
};

const infoParser = {
  valor_energetico: "Valor energético (kcal)",
  carboidratos: "Carboidratos (g)",
  acucares_totais: " Açúcares totais (g)",
  acucares_adicionados: "  Açúcares adicionados (g)",
  proteinas: "Proteínas (g)",
  gorduras_totais: "Gorduras totais (",
};

export function ProductDetail() {
  const titles = Object.keys(info.valores);
  const nutrients = Object.keys(info.valores[titles[0]]);

  const bgClasses = {
    esfihaabertadecarnemoida400g: "bg-esfihaabertadecarnemoida400g",
  };

  return (
    <>
      <Motion className="flex flex-col md:flex-row gap-4 w-full max-w-5xl mx-auto">
        <div className="flex-1 flex flex-col gap-4">
          <Title color="black">Esfiha Aberta de Carne Moída</Title>
          <Text>Peso líquido: 350g</Text>
        </div>
        <div className="flex">
          <Button
            className="w-auto"
            externalLink={
              "https://api.whatsapp.com/send/?phone=5542998138118&text=Ol%C3%A1,+estou+interessado+no+produto:+Esfiha+Aberta+de+Carne+Mo%C3%ADda+400g"
            }
            isProductLink
            bgColor="black"
          >
            <img className="size-5" src="/whatsapp-white.svg" alt="WhatsApp" />{" "}
            Fazer Pedido
          </Button>
        </div>
      </Motion>
      <Motion className="flex flex-col gap-4 w-full max-w-5xl mx-auto">
        <Subtitle color="green">Ingredientes</Subtitle>
        <Text>
          <strong>Massa:</strong> Farinha preparada (farinha de trigo
          enriquecida com ferro e ácido fólico, açúcar, sal e emulsificantes
          (INS 471, INS 482, INS 433, INS 472 e melhoradores de farinha
          alfa-amilase INS 927, INS 300)), farinha de trigo, água, óleo de soja,
          açúcar refinado, ovo, sal e fermento quimico (saccharomyces
          cerevisiae).
        </Text>
        <Text>
          <strong>Recheio:</strong> Carne bovina moída magra, tomate, suco de
          limão, cebola e molho vinagrete (cebola em flocos, cebolinha verde,
          coentro em pó, orégano, pimentão verde, pimentão vermelho, salsinha
          verde e tomate em flocos).
        </Text>
        <Text>
          <strong>
            ALÉRGICOS: CONTÉM OVOS, CONTÉM DERIVADOS DE SOJA E CONTÉM DERIVADOS
            DE TRIGO.
          </strong>
        </Text>
      </Motion>
      <Motion className="flex flex-col gap-4 w-full max-w-5xl mx-auto">
        <Subtitle color="green">Informação Nutricional</Subtitle>
        <Text>
          Porções por embalagem: {info.porcoes_por_embalagem}
          <br />
          Porção: {info.porcao}
        </Text>
      </Motion>
      <Motion className="flex flex-col w-full max-w-5xl mx-auto overflow-x-au">
        <div className="grid grid-cols-[minmax(200px,auto),1fr,1fr,1fr]">
          <div className="contents text-white font-bold rounded-md">
            <span className="bg-green-500 first:rounded-l-md last:rounded-r-md"></span>
            {titles.map((title) => (
              <span
                key={title}
                className="text-center p-2 bg-green-500 first:rounded-l-md last:rounded-r-md"
              >
                {title}
              </span>
            ))}
          </div>
          <div className="contents rounded-md">
            {nutrients.map((nutrient) => (
              <>
                <span
                  key={nutrient}
                  className="p-2 whitespace-pre-wrap break-words"
                >
                  {infoParser[nutrient] ? infoParser[nutrient] : "TODO"}
                </span>
                {titles.map((title) => (
                  <span key={title} className="text-center p-2">
                    {info.valores[title][nutrient]}
                  </span>
                ))}
              </>
            ))}
          </div>
        </div>

        {/* <div className="max-w-md mx-auto border border-gray-300 rounded-lg overflow-hidden text-sm">
          <div className="bg-gray-100 p-2 font-bold text-center">
            INFORMAÇÃO NUTRICIONAL
          </div>
          <div className="p-2 border-b border-gray-300">
            Porção de {info.porcao} — {info.porcoes_por_embalagem} porções por
            embalagem
          </div>
          <table className="w-full text-left">
            <thead className="bg-gray-50">
              <tr>
                <th className="p-2">Nutriente</th>
                <th className="p-2">Por porção (60g)</th>
                <th className="p-2">%VD*</th>
              </tr>
            </thead>
            <tbody>
              {nutrientes.map((key) => (
                <tr key={key} className="border-t">
                  <td className="p-2 capitalize">{key.replaceAll("_", " ")}</td>
                  <td className="p-2">{info.valores["60g"][key] || "-"}</td>
                  <td className="p-2">{info.valores["%VD*"][key] || "-"}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="text-xs text-gray-600 p-2">
            *% Valores Diários de referência com base em uma dieta de 2.000
            kcal.
          </div>
        </div> */}
      </Motion>
    </>
  );
}
