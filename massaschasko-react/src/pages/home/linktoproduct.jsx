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
      <div
        className="bg-white flex flex-col-reverse md:flex-row items-center 
     justify-center"
      >
        <div
          className={`shrink-0 ${
            backgroundImageClasses[page.slug]
          } bg-cover bg-no-repeat bg-left-top h-96 md:w-96 w-full`}
        ></div>
        <Container className="pb-0 md:pb-16 pt-8 md:pt-16">
          <Motion className="flex flex-col gap-4">
            <Subtitle color="green">{page.name}</Subtitle>
            <Text color="slate-900">{page.description}</Text>
            <Button>
              Conheça Nossos Produtos{" "}
              <ChevronRight className="shrink-0 size-5" />
            </Button>
          </Motion>
        </Container>
      </div>
    );
  } else if (imageRight) {
    return (
      <div
        className="bg-white flex flex-col md:flex-row items-center 
     justify-center"
      >
        <Container className="pb-0 md:pb-16 pt-8 md:pt-16">
          <Motion className="flex flex-col gap-4">
            <Subtitle color="green">{page.name}</Subtitle>
            <Text color="slate-900">{page.description}</Text>
            <Button>
              Conheça Nossos Produtos{" "}
              <ChevronRight className="shrink-0 size-5" />
            </Button>
          </Motion>
        </Container>
        <div
          className={`shrink-0 ${
            backgroundImageClasses[page.slug]
          } bg-cover bg-no-repeat bg-right-top h-96 md:w-96 w-full`}
        ></div>
      </div>
    );
  }
}
