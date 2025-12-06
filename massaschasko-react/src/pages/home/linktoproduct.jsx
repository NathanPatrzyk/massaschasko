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

  const imagePaths = {
    pieroguedebatata400g: "/pieroguedebatata400g.webp",
    pieroguedebatataebacon400g: "/pieroguedebatataebacon400g.webp",
    pieroguedebatataefrango400g: "/pieroguedebatataefrango400g.webp",
    pieroguedebatataecarnedesfiada400g:
      "/pieroguedebatataecarnedesfiada400g.webp",
    pieroguedebatataerepolho400g: "/pieroguedebatataerepolho400g.webp",
    pieroguedebatataerucula400g: "/pieroguedebatataerucula400g.webp",
    pieroguedecalabresa400g: "/pieroguedecalabresa400g.webp",
    pieroguedeespinafrericotaebrocolis400g:
      "/pieroguedeespinafrericotaebrocolis400g.webp",
    pieroguedefeijaoebacon400g: "/pieroguedefeijaoebacon400g.webp",
    pieroguedepizza400g: "/pieroguedepizza400g.webp",
    pieroguederequeijaoericota400g: "/pieroguederequeijaoericota400g.webp",
    pieroguedericotacomtomateseco400g:
      "/pieroguedericotacomtomateseco400g.webp",
    pieroguetradicional400g: "/pieroguetradicional400g.webp",

    pieroguedebatata2kg: "/pieroguedebatata2kg.webp",
    pieroguedebatataebacon2kg: "/pieroguedebatataebacon2kg.webp",
    pieroguedebatataefrango2kg: "/pieroguedebatataefrango2kg.webp",
    pieroguedecalabresa2kg: "/pieroguedecalabresa2kg.webp",
    pieroguederequeijaoericota2kg: "/pieroguederequeijaoericota2kg.webp",
    pieroguetradicional2kg: "/pieroguetradicional2kg.webp",

    minipieroguedebacon1kg: "/minipieroguedebacon1kg.webp",
    minipieroguedecalabresa1kg: "/minipieroguedecalabresa1kg.webp",
    minipieroguedecarnedesfiada1kg: "/minipieroguedecarnedesfiada1kg.webp",
    minipieroguedeespinafrericotaebrocolis1kg:
      "/minipieroguedeespinafrericotaebrocolis1kg.webp",
    minipieroguedefrango1kg: "/minipieroguedefrango1kg.webp",
    minipieroguederequeijao1kg: "/minipieroguederequeijao1kg.webp",
    minipieroguetradicional1kg: "/minipieroguetradicional1kg.webp",

    nhoquetradicional400g: "/nhoquetradicional400g.webp",
    nhoquerecheadodecarnemoida400g: "/nhoquerecheadodecarnemoida400g.webp",
    nhoquerecheadodefrango400g: "/nhoquerecheadodefrango400g.webp",
    nhoquerecheadodequeijo400g: "/nhoquerecheadodequeijo400g.webp",

    nhoquetradicional1kg: "/nhoquetradicional1kg.webp",
    nhoquedeespinafre1kg: "/nhoquedeespinafre1kg.webp",
    nhoquerecheadodecarnemoida1kg: "/nhoquerecheadodecarnemoida1kg.webp",
    nhoquerecheadodefrango1kg: "/nhoquerecheadodefrango1kg.webp",
    nhoquerecheadodequeijo1kg: "/nhoquerecheadodequeijo1kg.webp",

    croissantdecarnemoida350g: "/croissantdecarnemoida350g.webp",
    croissantdefrango350g: "/croissantdefrango350g.webp",
    croissantdepizza350g: "/croissantdepizza350g.webp",
    croissantdepalmito350g: "/croissantdepalmito350g.webp",
    croissantdebananacomcanela350g: "/croissantdebananacomcanela350g.webp",
    croissantdechocolatepreto350g: "/croissantdechocolatepreto350g.webp",

    croissantdecarnemoida12kg: "/croissantdecarnemoida12kg.webp",
    croissantdefrango12kg: "/croissantdefrango12kg.webp",
    croissantdepizza12kg: "/croissantdepizza12kg.webp",
    croissantdechocolatepreto12kg: "/croissantdechocolatepreto12kg.webp",

    esfihadecarnemoida350g: "/esfihadecarnemoida350g.webp",
    esfihadefrango350g: "/esfihadefrango350g.webp",
    esfihadepizza350g: "/esfihadepizza350g.webp",
    esfihadepalmito350g: "/esfihadepalmito350g.webp",
    esfihadecostela350g: "/esfihadecostela350g.webp",
    esfihamultigraos350g: "/esfihamultigraos350g.webp",

    esfihadecarnemoida12kg: "/esfihadecarnemoida12kg.webp",
    esfihadefrango12kg: "/esfihadefrango12kg.webp",

    esfihaabertadecarnemoida400g: "/esfihaabertadecarnemoida400g.webp",
    esfihaabertadefrango400g: "/esfihaabertadefrango400g.webp",
    esfihaabertadepizza400g: "/esfihaabertadepizza400g.webp",
    esfihaabertadecostela400g: "/esfihaabertadecostela400g.webp",
    esfihaabertadechocolatepreto400g: "/esfihaabertadechocolatepreto400g.webp",

    paodequeijocomcheddar500g: "/paodequeijocomcheddar500g.webp",
    paodequeijocomvinagrete500g: "/paodequeijocomvinagrete500g.webp",
    paodequeijotradicional500g: "/paodequeijotradicional500g.webp",

    charutoderepolho400g: "/charutoderepolho400g.webp",
    churrosdedocedeleitecomchocolate400g:
      "/churrosdedocedeleitecomchocolate400g.webp",
    coxinhadefrangoecatupiry400g: "/coxinhadefrangoecatupiry400g.webp",
    kiberecheado400g: "/kiberecheado400g.webp",
    macarraotalharim400g: "/macarraotalharim400g.webp",

    churrosdedocedeleitecomchocolate1kg:
      "/churrosdedocedeleitecomchocolate1kg.webp",
    coxinhadefrangoecatupiry1kg: "/coxinhadefrangoecatupiry1kg.webp",
    kiberecheado1kg: "/kiberecheado1kg.webp",

    hamburgao12kg: "/hamburgao12kg.webp",
    hotdog12kg: "/hotdog12kg.webp",
  };

  let flexRow;
  if (imageLeft) {
    flexRow = "imageLeft";
  } else if (imageRight) {
    flexRow = "imageRight";
  }

  const imageClasses =
    "object-contain aspect-[13/18] rounded-md hover:scale-105 transition ease-in-out duration-300 w-full h-full";

  const getImagePath = (productName) => imagePaths[productName] || "";

  if (light) {
    return (
      <Container
        className={`bg-zinc-100 flex flex-col ${
          flexRow && flexRowClasses[flexRow]
        } items-center justify-center gap-8 md:pb-16 p-8 md:p-16`}
      >
        <Motion className="md:shrink-0 grid grid-cols-3 grid-rows-3 gap-2 h-[100vw] max-h-96 max-w-[78vw]">
          <img
            src={getImagePath(products && products[0])}
            alt={products && products[0]}
            className={imageClasses}
          />
          <img
            src={getImagePath(products && products[1])}
            alt={products && products[1]}
            className={imageClasses}
          />
          <img
            src={getImagePath(products && products[2])}
            alt={products && products[2]}
            className={imageClasses}
          />
          <img
            src={getImagePath(products && products[3])}
            alt={products && products[3]}
            className={imageClasses}
          />
          <img
            src={getImagePath(products && products[4])}
            alt={products && products[4]}
            className={imageClasses}
          />
          <img
            src={getImagePath(products && products[5])}
            alt={products && products[5]}
            className={imageClasses}
          />
          <img
            src={getImagePath(products && products[6])}
            alt={products && products[6]}
            className={imageClasses}
          />
          <img
            src={getImagePath(products && products[7])}
            alt={products && products[7]}
            className={imageClasses}
          />
          <img
            src={getImagePath(products && products[8])}
            alt={products && products[8]}
            className={imageClasses}
          />
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
          <img
            src={getImagePath(products && products[0])}
            alt={products && products[0]}
            className={imageClasses}
          />
          <img
            src={getImagePath(products && products[1])}
            alt={products && products[1]}
            className={imageClasses}
          />
          <img
            src={getImagePath(products && products[2])}
            alt={products && products[2]}
            className={imageClasses}
          />
          <img
            src={getImagePath(products && products[3])}
            alt={products && products[3]}
            className={imageClasses}
          />
          <img
            src={getImagePath(products && products[4])}
            alt={products && products[4]}
            className={imageClasses}
          />
          <img
            src={getImagePath(products && products[5])}
            alt={products && products[5]}
            className={imageClasses}
          />
          <img
            src={getImagePath(products && products[6])}
            alt={products && products[6]}
            className={imageClasses}
          />
          <img
            src={getImagePath(products && products[7])}
            alt={products && products[7]}
            className={imageClasses}
          />
          <img
            src={getImagePath(products && products[8])}
            alt={products && products[8]}
            className={imageClasses}
          />
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
