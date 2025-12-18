import { Link } from "react-router-dom";
import { Motion } from "../../components/motion";
import { Title } from "../../components/title";
import { Text } from "../../components/text";
import { Button } from "../../components/button";
import { CookingPot, Microwave, Refrigerator } from "lucide-react";
import { Subtitle } from "../../components/subtitle";

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

export function ProductDetails({ product, categorySlug }) {
  const titles = Object.keys(product.nutricionalInformation.valores);
  const nutrients = Object.keys(
    product.nutricionalInformation.valores[titles[0]]
  );

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
    esfihademultigraos350g: "bg-esfihademultigraos350g",

    esfihadecarnemoida12kg: "bg-esfihadecarnemoida12kg",
    esfihadefrango12kg: "bg-esfihadefrango12kg",

    esfihaabertadecarnemoida400g: "bg-esfihaabertadecarnemoida400g",
    esfihaabertadefrango400g: "bg-esfihaabertadefrango400g",
    esfihaabertadepizza400g: "bg-esfihaabertadepizza400g",
    esfihaabertadecostela400g: "bg-esfihaabertadecostela400g",
    esfihaabertadechocolatepreto400g: "bg-esfihaabertadechocolatepreto400g",
    esfihaabertadecalabresa400g: "bg-esfihaabertadecalabresa400g",
    esfihaabertadequeijo400g: "bg-esfihaabertadequeijo400g",

    paodequeijocomcheddar500g: "bg-paodequeijocomcheddar500g",
    paodequeijocomvinagrete500g: "bg-paodequeijocomvinagrete500g",
    paodequeijotradicional500g: "bg-paodequeijotradicional500g",

    charutoderepolho400g: "bg-charutoderepolho400g",
    churrosdedocedeleitecomchocolate400g:
      "bg-churrosdedocedeleitecomchocolate400g",
    coxinhadefrangoecatupiry400g: "bg-coxinhadefrangoecatupiry400g",
    kiberecheado400g: "bg-kiberecheado400g",
    macarraotalharim400g: "bg-macarraotalharim400g",

    churrosdedocedeleitecomchocolate1kg:
      "bg-churrosdedocedeleitecomchocolate1kg",
    coxinhadefrangoecatupiry1kg: "bg-coxinhadefrangoecatupiry1kg",
    kiberecheado1kg: "bg-kiberecheado1kg",

    hamburgao12kg: "bg-hamburgao12kg",
    hotdog12kg: "bg-hotdog12kg",
  };

  return (
    <>
      <Motion className="flex items-center justify-between w-full gap-4 max-w-5xl mx-auto">
        <Link
          to={`/produtos/${categorySlug}`}
          className="text-green-600 font-semibold underline transition ease-in-out duration-300 hover:opacity-80"
        >
          Voltar
        </Link>
      </Motion>
      <Motion className="flex flex-col md:flex-row gap-4 w-full max-w-5xl mx-auto">
        <div className="flex-1 flex flex-col gap-4">
          <Title color="black">{product.name}</Title>
          <Text>{product.description}</Text>
        </div>
        <div className="flex">
          <Button
            className="w-auto"
            externalLink={
              "https://api.whatsapp.com/send/?phone=5542998138118&text=" +
              product.messageForWhatsapp
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
        {(product.name.includes("Mini Pierogue") ||
          product.name.includes("Nhoque") ||
          product.name.includes("Churros de Doce de Leite com Chocolate") ||
          product.name.includes("Coxinha de Frango e Catupiry") ||
          product.name.includes("Kibe Recheado")) &&
        product.weight.includes("1Kg") ? (
          <div
            className={`${
              bgClasses[product.imageName]
            } bg-contain hover:scale-105 transition ease-in-out duration-300 aspect-[1/2] size-full max-w-36 rounded-md`}
          ></div>
        ) : (
          <div
            className={`${
              bgClasses[product.imageName]
            } bg-contain hover:scale-105 transition ease-in-out duration-300 aspect-[13/18] size-full max-w-52 rounded-md`}
          ></div>
        )}
      </Motion>
      {product.name.startsWith("Esfiha Aberta") && (
        <Motion className="grid md:grid-cols-3 grid-cols-1 place-items-center gap-4 p-4 w-full max-w-5xl mx-auto text-center">
          <div className="flex flex-col gap-4 items-center">
            <Microwave className="size-16 bg-green-600/15 text-green-600 p-3 rounded-full" />
            <Text>
              <strong>Microondas:</strong> Aqueça por 30 seg. resfriada e 1 min.
              congelada.
            </Text>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <CookingPot className="size-16 bg-green-600/15 text-green-600 p-3 rounded-full" />
            <Text>
              <strong>Air Fryer:</strong> Conforme a potência do seu aparelho.
            </Text>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <Refrigerator className="size-16 bg-green-600/15 text-green-600 p-3 rounded-full" />
            <Text>
              <strong>Refrigerado:</strong> Até +5ºC
              <br />
              <strong>Congelado:</strong> -5ºC a -20ºC
            </Text>
          </div>
        </Motion>
      )}
      <Motion className="flex flex-col gap-4 w-full max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-between sm:items-end items-start">
          <div className="flex flex-col gap-4">
            <Subtitle color="green">Ingredientes</Subtitle>
            <Text>
              <strong>CONTÉM GLÚTEN</strong>
            </Text>
          </div>
          {product.name == "Esfiha Aberta de Carne Moída" && (
            <img
              className="h-20"
              src="/alto-em-sodio.png"
              alt="Alto em Sódio"
            />
          )}
          {product.name == "Esfiha Aberta de Queijo" && (
            <img
              className="h-12"
              src="/alto-em-gordura-saturada.png"
              alt="Alto em Gordura Saturada"
            />
          )}
          {product.name == "Esfiha Aberta de Calabresa" && (
            <img
              className="h-12"
              src="/alto-em-gordura-saturada-sodio.png"
              alt="Alto em Gordura Saturada e Sódio"
            />
          )}
        </div>
        <div
          className="flex flex-col gap-4"
          dangerouslySetInnerHTML={{ __html: product.ingredients }}
        />
      </Motion>
      <Motion className="flex flex-col gap-4 w-full max-w-5xl mx-auto">
        <Subtitle color="green">Informação Nutricional</Subtitle>
        <Text>
          Porções por embalagem:{" "}
          {product.nutricionalInformation.porcoes_por_embalagem}
          <br />
          Porção: {product.nutricionalInformation.porcao}
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
                    {product.nutricionalInformation.valores[title][nutrient]}
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
