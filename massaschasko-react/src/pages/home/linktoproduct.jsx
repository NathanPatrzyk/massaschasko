import { ChevronRight } from "lucide-react";

import { Button } from "../../components/button";
import { Container } from "../../components/container";
import { Motion } from "../../components/motion";
import { Subtitle } from "../../components/subtitle";
import { Text } from "../../components/text";

export function LinkToProduct({ page, imageLeft, imageRight }) {
  const backgroundImageClasses = {
    pierogues: "bg-pierogues",
    nhoques: "  bg-nhoques",
  };

  if (imageLeft) {
    return (
      <Container className="bg-white flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:pb-16 p-8 md:p-16">
        <Motion className="md:shrink-0 grid grid-cols-3 grid-rows-3 gap-4 w-96 max-w-[78vw]">
          <div className="bg-green-500 aspect-[13/18] rounded-md"></div>
          <div className="bg-green-500 aspect-[13/18] rounded-md"></div>
          <div className="bg-green-500 aspect-[13/18] rounded-md"></div>
          <div className="bg-green-500 aspect-[13/18] rounded-md"></div>
          <div className="bg-green-500 aspect-[13/18] rounded-md"></div>
          <div className="bg-green-500 aspect-[13/18] rounded-md"></div>
          <div className="bg-green-500 aspect-[13/18] rounded-md"></div>
          <div className="bg-green-500 aspect-[13/18] rounded-md"></div>
          <div className="bg-green-500 aspect-[13/18] rounded-md"></div>
        </Motion>

        <Motion className="flex flex-col gap-4">
          <Subtitle color="green">{page.name}</Subtitle>
          <Text color="slate-900">{page.description}</Text>
          <Button>
            Conheça Nossos Produtos <ChevronRight className="shrink-0 size-5" />
          </Button>
        </Motion>
      </Container>
    );
  } else if (imageRight) {
    return (
      <Container className="bg-white flex flex-col md:flex-row items-center justify-center gap-8 md:pb-16 p-8 md:p-16">
        <Motion className="flex flex-col gap-4">
          <Subtitle color="green">{page.name}</Subtitle>
          <Text color="slate-900">{page.description}</Text>
          <Button>
            Conheça Nossos Produtos <ChevronRight className="shrink-0 size-5" />
          </Button>
        </Motion>

        <Motion className="md:shrink-0 grid grid-cols-3 grid-rows-3 gap-4 w-96 max-w-[78vw]">
          <div className="bg-green-500 aspect-[13/18] rounded-md"></div>
          <div className="bg-green-500 aspect-[13/18] rounded-md"></div>
          <div className="bg-green-500 aspect-[13/18] rounded-md"></div>
          <div className="bg-green-500 aspect-[13/18] rounded-md"></div>
          <div className="bg-green-500 aspect-[13/18] rounded-md"></div>
          <div className="bg-green-500 aspect-[13/18] rounded-md"></div>
          <div className="bg-green-500 aspect-[13/18] rounded-md"></div>
          <div className="bg-green-500 aspect-[13/18] rounded-md"></div>
          <div className="bg-green-500 aspect-[13/18] rounded-md"></div>
        </Motion>
      </Container>
    );
  }
}
