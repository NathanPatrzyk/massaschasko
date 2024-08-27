import { ChevronRight } from "lucide-react";

import { Button } from "../../components/button";
import { Container } from "../../components/container";
import { Motion } from "../../components/motion";
import { Title } from "../../components/title";
import { Subtitle } from "../../components/subtitle";
import { Text } from "../../components/text";

export function Main() {
  return (
    <Container className="bg-black/70 backdrop-blur-sm flex flex-col-reverse md:flex-row items-center justify-center gap-8 py-8 md:py-16 pt-24 md:pt-32 min-h-[70vh]">
      <Motion className="flex flex-col gap-4">
        <Title color="white">Massas Chasko</Title>
        <Subtitle color="green">
          Somos uma empresa de massas feitas 100% caseiras.
        </Subtitle>
        <Text color="white">
          Possuímos um amplo e moderno catálogo de massas e produtos congelados.
          Somos a marca mais conhecida e querida entre nossos consumidores.
          Conheça mais e experimente nossos produtos!
        </Text>
        <Button link="/produtos/1">
          Conheça Nossos Produtos <ChevronRight className="shrink-0 size-5" />
        </Button>
      </Motion>
      <Motion className="shrink-0 w-96 max-w-full">
        <img className="px-8 md:px-16 size-full" src="/logo.svg" />
      </Motion>
    </Container>
  );
}
