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
    pieroguedebatataecarnedesfiada400g: "bg-pieroguedebatataecarnedesfiada400g",
    pieroguedecalabresa400g: "bg-pieroguedecalabresa400g",
    pieroguedeespinafrericotaebrocolis400g: "bg-pieroguedeespinafrericotaebrocolis400g",
    pieroguedebatataefrango400g: "bg-pieroguedebatataefrango400g",
    pieroguedepizza400g: "bg-pieroguedepizza400g",
    pieroguetradicional2kg: "bg-pieroguetradicional2kg",

    nhoquerecheadodecarnemoida400g: "bg-nhoquerecheadodecarnemoida400g",
    nhoquerecheadodefrango1kg: "bg-nhoquerecheadodefrango1kg",
    nhoquerecheadodequeijo1kg: "bg-nhoquerecheadodequeijo1kg",
    nhoquetradicional400g: "bg-nhoquetradicional400g",
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
          <div className="bg-green-500 bg-contain aspect-[13/18] rounded-md hover:scale-105 transition ease-in-out duration-300"></div>
          <div className="bg-green-500 bg-contain aspect-[13/18] rounded-md hover:scale-105 transition ease-in-out duration-300"></div>
          <div className="bg-green-500 bg-contain aspect-[13/18] rounded-md hover:scale-105 transition ease-in-out duration-300"></div>
          <div className="bg-green-500 bg-contain aspect-[13/18] rounded-md hover:scale-105 transition ease-in-out duration-300"></div>
          <div className="bg-green-500 bg-contain aspect-[13/18] rounded-md hover:scale-105 transition ease-in-out duration-300"></div>
          <div className="bg-green-500 bg-contain aspect-[13/18] rounded-md hover:scale-105 transition ease-in-out duration-300"></div>
          <div className="bg-green-500 bg-contain aspect-[13/18] rounded-md hover:scale-105 transition ease-in-out duration-300"></div>
          <div className="bg-green-500 bg-contain aspect-[13/18] rounded-md hover:scale-105 transition ease-in-out duration-300"></div>
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
