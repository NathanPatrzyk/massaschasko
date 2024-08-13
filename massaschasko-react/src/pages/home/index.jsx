import { ChevronRight } from "lucide-react";

import { Button } from "../../components/button";
import { Container } from "../../components/container";
import { Motion } from "../../components/motion";

export function Home() {
  return (
    <div className="bg-home bg-cover bg-bottom bg-fixed">
      <Container className="bg-black/70 backdrop-blur-sm flex flex-col md:flex-row items-center justify-center gap-8 py-8 md:py-16 pt-24 md:pt-32 min-h-[70vh]">
        <Motion className="flex flex-col gap-4  order-last md:order-first">
          <h1 className="text-white text-3xl sm:text-4xl">Massas Chasko</h1>
          <h2 className="text-green-600 text-2xl font-bold uppercase">
            Somos uma empresa de massas feitas 100% caseiras.
          </h2>
          <p className="text-white">
            Possuímos um amplo e moderno catálogo de massas e produtos
            congelados. Somos a marca mais conhecida e querida entre nossos
            consumidores. Conheça mais e experimente nossos produtos!
          </p>
          <div>
            <Button>
              Conheça Nossos Produtos <ChevronRight className="size-5" />
            </Button>
          </div>
        </Motion>
        <Motion className="shrink-0 w-64 h-[155px]">
          <img className="size-full" src="/logo.svg" />
        </Motion>
      </Container>
    </div>
  );
}
