import { Text } from "../../components/text";
import { Button } from "../../components/button";
import { Title } from "../../components/title";
import { Subtitle } from "../../components/subtitle";
import { Motion } from "../../components/motion";
import { CookingPot, Microwave, Refrigerator } from "lucide-react";
import { Container } from "../../components/container";
import { Link, useNavigate } from "react-router-dom";

const bgClasses = {
  pieroguedebatata400g: "bg-pieroguedebatata400g",
  pieroguedebatataebacon400g: "bg-pieroguedebatataebacon400g",
  pieroguedebatataefrango400g: "bg-pieroguedebatataefrango400g",
  pieroguedebatataecarnedesfiada400g: "bg-pieroguedebatataecarnedesfiada400g",
  pieroguedebatataerepolho400g: "bg-pieroguedebatataerepolho400g",
  pieroguedebatataerucula400g: "bg-pieroguedebatataerucula400g",
  pieroguedecalabresa400g: "bg-pieroguedecalabresa400g",
  pieroguedeespinafrericotaebrocolis400g:
    "bg-pieroguedeespinafrericotaebrocolis400g",
  pieroguedefeijaoebacon400g: "bg-pieroguedefeijaoebacon400g",
  pieroguedepizza400g: "bg-pieroguedepizza400g",
  pieroguederequeijaoericota400g: "bg-pieroguederequeijaoericota400g",
  pieroguedericotacomtomateseco400g: "bg-pieroguedericotacomtomateseco400g",
  pieroguetradicional400g: "bg-pieroguetradicional400g",

  pieroguedebatata2kg: "bg-pieroguedebatata2kg",
  pieroguedebatataebacon2kg: "bg-pieroguedebatataebacon2kg",
  pieroguedebatataefrango2kg: "bg-pieroguedebatataefrango2kg",
  pieroguedecalabresa2kg: "bg-pieroguedecalabresa2kg",
  pieroguederequeijaoericota2kg: "bg-pieroguederequeijaoericota2kg",
  pieroguetradicional2kg: "bg-pieroguetradicional2kg",

  minipieroguedebacon1kg: "bg-minipieroguedebacon1kg",
  minipieroguedecalabresa1kg: "bg-minipieroguedecalabresa1kg",
  minipieroguedecarnedesfiada1kg: "bg-minipieroguedecarnedesfiada1kg",
  minipieroguedeespinafrericotaebrocolis1kg:
    "bg-minipieroguedeespinafrericotaebrocolis1kg",
  minipieroguedefrango1kg: "bg-minipieroguedefrango1kg",
  minipieroguederequeijao1kg: "bg-minipieroguederequeijao1kg",
  minipieroguetradicional1kg: "bg-minipieroguetradicional1kg",

  nhoquetradicional400g: "bg-nhoquetradicional400g",
  nhoquerecheadodecarnemoida400g: "bg-nhoquerecheadodecarnemoida400g",
  nhoquerecheadodefrango400g: "bg-nhoquerecheadodefrango400g",
  nhoquerecheadodequeijo400g: "bg-nhoquerecheadodequeijo400g",

  nhoquetradicional1kg: "bg-nhoquetradicional1kg",
  nhoquedeespinafre1kg: "bg-nhoquedeespinafre1kg",
  nhoquerecheadodecarnemoida1kg: "bg-nhoquerecheadodecarnemoida1kg",
  nhoquerecheadodefrango1kg: "bg-nhoquerecheadodefrango1kg",
  nhoquerecheadodequeijo1kg: "bg-nhoquerecheadodequeijo1kg",

  croissantdecarnemoida350g: "bg-croissantdecarnemoida350g",
  croissantdefrango350g: "bg-croissantdefrango350g",
  croissantdepizza350g: "bg-croissantdepizza350g",
  croissantdepalmito350g: "bg-croissantdepalmito350g",
  croissantdebananacomcanela350g: "bg-croissantdebananacomcanela350g",
  croissantdechocolatepreto350g: "bg-croissantdechocolatepreto350g",

  croissantdecarnemoida12kg: "bg-croissantdecarnemoida12kg",
  croissantdefrango12kg: "bg-croissantdefrango12kg",
  croissantdepizza12kg: "bg-croissantdepizza12kg",
  croissantdechocolatepreto12kg: "bg-croissantdechocolatepreto12kg",

  esfihadecarnemoida350g: "bg-esfihadecarnemoida350g",
  esfihadefrango350g: "bg-esfihadefrango350g",
  esfihadepizza350g: "bg-esfihadepizza350g",
  esfihadepalmito350g: "bg-esfihadepalmito350g",
  esfihadecostela350g: "bg-esfihadecostela350g",
  esfihamultigraos350g: "bg-esfihamultigraos350g",

  esfihadecarnemoida12kg: "bg-esfihadecarnemoida12kg",
  esfihadefrango12kg: "bg-esfihadefrango12kg",

  esfihaabertadecarnemoida400g: "bg-esfihaabertadecarnemoida400g",
  esfihaabertadefrango400g: "bg-esfihaabertadefrango400g",
  esfihaabertadepizza400g: "bg-esfihaabertadepizza400g",
  esfihaabertadecostela400g: "bg-esfihaabertadecostela400g",
  esfihaabertadechocolatepreto400g: "bg-esfihaabertadechocolatepreto400g",

  paodequeijocomcheddar500g: "bg-paodequeijocomcheddar500g",
  paodequeijocomvinagrete500g: "bg-paodequeijocomvinagrete500g",
  paodequeijotradicional500g: "bg-paodequeijotradicional500g",

  charutoderepolho400g: "bg-charutoderepolho400g",
  churrosdedocedeleitecomchocolate400g:
    "bg-churrosdedocedeleitecomchocolate400g",
  coxinhadefrangoecatupiry400g: "bg-coxinhadefrangoecatupiry400g",
  kiberecheado400g: "bg-kiberecheado400g",
  macarraotalharim400g: "bg-macarraotalharim400g",

  churrosdedocedeleitecomchocolate1kg: "bg-churrosdedocedeleitecomchocolate1kg",
  coxinhadefrangoecatupiry1kg: "bg-coxinhadefrangoecatupiry1kg",
  kiberecheado1kg: "bg-kiberecheado1kg",

  hamburgao12kg: "bg-hamburgao12kg",
  hotdog12kg: "bg-hotdog12kg",
};

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
  gorduras_totais: "Gorduras totais (g)",
  gorduras_saturadas: " Gorduras saturadas (g)",
  gorduras_trans: " Gorduras trans (g)",
  fibras_alimentares: "Fibras alimentares (g)",
  sodio: "Sódio (mg)",
};

export function PreviewProductDetails() {
  const titles = Object.keys(info.valores);
  const nutrients = Object.keys(info.valores[titles[0]]);

  const bgClasses = {
    esfihaabertadecarnemoida400g: "bg-esfihaabertadecarnemoida400g",
  };

  return (
    <>
      <Motion className="flex items-center justify-between w-full gap-4 max-w-5xl mx-auto">
        <Link
          to={"/produtos/modelo"}
          className="text-green-600 font-semibold underline transition ease-in-out duration-300 hover:opacity-80"
        >
          Voltar
        </Link>
      </Motion>
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
      <Motion className="flex flex-col gap-4 w-full max-w-5xl mx-auto items-center">
        <div
          className={`bg-esfihaabertadecarnemoida400g bg-contain hover:scale-105 transition ease-in-out duration-300 aspect-[13/18] size-full max-w-52 rounded-md`}
        ></div>
      </Motion>
      <Motion className="grid md:grid-cols-3 grid-cols-1 place-items-center gap-4 p-4 w-full max-w-5xl mx-auto text-center">
        <div className="flex flex-col gap-4 items-center">
          <Microwave className="size-16 bg-green-600/15 text-green-600 p-3 rounded-full" />{" "}
          <Text>
            <strong>Microondas:</strong> Aqueça por 30 seg. resfriada e 1 min.
            congelada.
          </Text>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <CookingPot className="size-16 bg-green-600/15 text-green-600 p-3 rounded-full" />{" "}
          <Text>
            <strong>Air Fryer:</strong> Conforme a potência do seu aparelho.
          </Text>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <Refrigerator className="size-16 bg-green-600/15 text-green-600 p-3 rounded-full" />{" "}
          <Text>
            <strong>Refrigerado:</strong> Até +5ºC
            <br />
            <strong>Congelado:</strong> -5ºC a -20ºC
          </Text>
        </div>
      </Motion>
      <Motion className="flex flex-col gap-4 w-full max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-between sm:items-end items-start">
          <div className="flex flex-col gap-4">
            <Subtitle color="green">Ingredientes</Subtitle>
            <Text>
              <strong>CONTÉM GLÚTEN</strong>
            </Text>
          </div>
          <img className="h-20" src="/alto-em-sodio.png" alt="Alto em Sódio" />
        </div>
        <p>
          <strong>Massa:</strong> Farinha preparada (farinha de trigo
          enriquecida com ferro e ácido fólico, açúcar, sal e emulsificantes
          (INS 471, INS 482, INS 43, INS 472 e melhoradores de farinha
          alfa-amilase INS 927, INS 300)), farinha de trigo, água, óleo de soja,
          açúcar refinado, ovo, sal e fermento quimico (saccharomyces
          cerevisiae).
        </p>
        <p>
          <strong>Recheio:</strong> Carne bovina moída magra, tomate, suco de
          limão, cebola e molho vinagrete (cebola em flocos, cebolinha verde,
          coentro em pó, orégano, pimentão verde, pimentão vermelho, salsinha
          verde e tomate em flocos).
        </p>
        <p>
          <strong>
            ALÉRGICOS: CONTÉM OVOS, DERIVADOS DE SOJA E DERIVADOS DE TRIGO.
          </strong>
        </p>
      </Motion>
      <Motion className="flex flex-col gap-4 w-full max-w-5xl mx-auto">
        <Subtitle color="green">Informação Nutricional</Subtitle>
        <Text>
          Porções por embalagem: {info.porcoes_por_embalagem}
          <br />
          Porção: {info.porcao}
        </Text>
      </Motion>
      <Motion className="flex flex-col w-full max-w-5xl mx-auto overflow-x-auto">
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
                  {infoParser[nutrient] && infoParser[nutrient]}
                </span>
                {titles.map((title) => (
                  <span key={title} className="text-center p-2">
                    {info.valores[title][nutrient]}
                  </span>
                ))}
              </>
            ))}
          </div>
          <div className="col-span-4 p-2">
            * Percentual de valores diários fornecidos pela porção.
          </div>
        </div>
      </Motion>
    </>
  );
}

export function PreviewProductsDetails() {
  return (
    <Container className="bg-zinc-100 flex flex-col gap-8 py-8 md:py-16 pt-24 md:pt-32 w-full">
      <PreviewProductDetails />
    </Container>
  );
}
