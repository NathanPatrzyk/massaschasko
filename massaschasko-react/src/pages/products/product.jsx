import { Text } from "../../components/text";
import { Button } from "../../components/button";

import { useFetch } from "../../hooks/useFetch";

export function Product({ category }) {
  const url = "https://massaschasko-api.nathanpatrzyk11.workers.dev";
  const productsUrl = category
    ? `${url}/pages/categories/${category.id}/products`
    : null;

  const { data: products, loading, error } = useFetch(productsUrl);

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

    churrosdedocedeleitecomchocolate1kg:
      "bg-churrosdedocedeleitecomchocolate1kg",
    coxinhadefrangoecatupiry1kg: "bg-coxinhadefrangoecatupiry1kg",
    kiberecheado1kg: "bg-kiberecheado1kg",

    hamburgao12kg: "bg-hamburgao12kg",
    hotdog12kg: "bg-hotdog12kg",
  };

  return (
    <div className="grid xs:grid-cols-responsive grid-cols-1 gap-8 max-w-full">
      {products &&
        products.map((product) => (
          <div className="bg-white flex flex-col justify-center items-center rounded-md gap-4 py-4 divide-y-2 border-2">
            <div className="flex-1 flex flex-col items-center px-4 size-full">
              {(product.name.includes("Mini Pierogue") ||
                product.name.includes("Nhoque") ||
                product.name.includes(
                  "Churros de Doce de Leite com Chocolate"
                ) ||
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
            </div>
            <div className="flex-1 flex flex-col gap-4 pt-4 w-full">
              <h3 className="text-zinc-800 text-xl text-center font-semibold w-full px-4">
                {product.name}
              </h3>
              <Text className="flex-1 text-center w-full px-4" color="black">
                {product.description}
              </Text>
              <Button externalLink="#" isProductLink bgColor="black">
                <img
                  className="size-5"
                  src="/whatsapp-white.svg"
                  alt="WhatsApp"
                />{" "}
                Fazer Pedido
              </Button>
            </div>
          </div>
        ))}
    </div>
  );
}
