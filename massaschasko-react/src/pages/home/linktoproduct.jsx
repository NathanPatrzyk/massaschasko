import { ChevronRight } from "lucide-react";

import { Button } from "../../components/button";
import { Container } from "../../components/container";
import { Motion } from "../../components/motion";
import { Subtitle } from "../../components/subtitle";
import { Text } from "../../components/text";

export function LinkToProduct({
  page,
  imageLeft,
  imageRight,
  light,
  dark,
  products,
}) {
  const flexRowClasses = {
    imageLeft: "md:flex-row",
    imageRight: "md:flex-row-reverse",
  };

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

  let flexRow;
  if (imageLeft) {
    flexRow = "imageLeft";
  } else if (imageRight) {
    flexRow = "imageRight";
  }

  if (light) {
    return (
      <Container
        className={`bg-zinc-100 flex flex-col ${
          flexRow && flexRowClasses[flexRow]
        } items-center justify-center gap-8 md:pb-16 p-8 md:p-16`}
      >
        <Motion className="md:shrink-0 grid grid-cols-3 grid-rows-3 gap-2 h-[100vw] max-h-96 max-w-[78vw]">
          <div
            className={
              bgClasses[products && products[0]] +
              " bg-contain aspect-[13/18] rounded-md hover:scale-105 transition ease-in-out duration-300"
            }
          ></div>
          <div
            className={
              bgClasses[products && products[1]] +
              " bg-contain aspect-[13/18] rounded-md hover:scale-105 transition ease-in-out duration-300"
            }
          ></div>
          <div
            className={
              bgClasses[products && products[2]] +
              " bg-contain aspect-[13/18] rounded-md hover:scale-105 transition ease-in-out duration-300"
            }
          ></div>
          <div
            className={
              bgClasses[products && products[3]] +
              " bg-contain aspect-[13/18] rounded-md hover:scale-105 transition ease-in-out duration-300"
            }
          ></div>
          <div
            className={
              bgClasses[products && products[4]] +
              " bg-contain aspect-[13/18] rounded-md hover:scale-105 transition ease-in-out duration-300"
            }
          ></div>
          <div
            className={
              bgClasses[products && products[5]] +
              " bg-contain aspect-[13/18] rounded-md hover:scale-105 transition ease-in-out duration-300"
            }
          ></div>
          <div
            className={
              bgClasses[products && products[6]] +
              " bg-contain aspect-[13/18] rounded-md hover:scale-105 transition ease-in-out duration-300"
            }
          ></div>
          <div
            className={
              bgClasses[products && products[7]] +
              " bg-contain aspect-[13/18] rounded-md hover:scale-105 transition ease-in-out duration-300"
            }
          ></div>
          <div
            className={
              bgClasses[products && products[8]] +
              " bg-contain aspect-[13/18] rounded-md hover:scale-105 transition ease-in-out duration-300"
            }
          ></div>
        </Motion>

        <Motion className="flex flex-col gap-4">
          <Subtitle color="green">{page.name}</Subtitle>
          <Text color="black">{page.description}</Text>
          <Button link={`/produtos/${page.slug}`}>
            Conheça Nossos Produtos <ChevronRight className="shrink-0 size-5" />
          </Button>
        </Motion>
      </Container>
    );
  } else if (dark) {
    return (
      <Container
        className={`bg-zinc-900 flex flex-col ${
          flexRow && flexRowClasses[flexRow]
        } items-center justify-center gap-8 md:pb-16 p-8 md:p-16`}
      >
        <Motion className="md:shrink-0 grid grid-cols-3 grid-rows-3 gap-2 h-96 max-w-[78vw]">
          <div
            className={
              bgClasses[products && products[0]] +
              " bg-contain aspect-[13/18] rounded-md hover:scale-105 transition ease-in-out duration-300"
            }
          ></div>
          <div
            className={
              bgClasses[products && products[1]] +
              " bg-contain aspect-[13/18] rounded-md hover:scale-105 transition ease-in-out duration-300"
            }
          ></div>
          <div
            className={
              bgClasses[products && products[2]] +
              " bg-contain aspect-[13/18] rounded-md hover:scale-105 transition ease-in-out duration-300"
            }
          ></div>
          <div
            className={
              bgClasses[products && products[3]] +
              " bg-contain aspect-[13/18] rounded-md hover:scale-105 transition ease-in-out duration-300"
            }
          ></div>
          <div
            className={
              bgClasses[products && products[4]] +
              " bg-contain aspect-[13/18] rounded-md hover:scale-105 transition ease-in-out duration-300"
            }
          ></div>
          <div
            className={
              bgClasses[products && products[5]] +
              " bg-contain aspect-[13/18] rounded-md hover:scale-105 transition ease-in-out duration-300"
            }
          ></div>
          <div
            className={
              bgClasses[products && products[6]] +
              " bg-contain aspect-[13/18] rounded-md hover:scale-105 transition ease-in-out duration-300"
            }
          ></div>
          <div
            className={
              bgClasses[products && products[7]] +
              " bg-contain aspect-[13/18] rounded-md hover:scale-105 transition ease-in-out duration-300"
            }
          ></div>
          <div
            className={
              bgClasses[products && products[8]] +
              " bg-contain aspect-[13/18] rounded-md hover:scale-105 transition ease-in-out duration-300"
            }
          ></div>
        </Motion>

        <Motion className="flex flex-col gap-4">
          <Subtitle color="green">{page.name}</Subtitle>
          <Text color="white">{page.description}</Text>
          <Button link={`/produtos/${page.slug}`}>
            Conheça Nossos Produtos <ChevronRight className="shrink-0 size-5" />
          </Button>
        </Motion>
      </Container>
    );
  }
}
