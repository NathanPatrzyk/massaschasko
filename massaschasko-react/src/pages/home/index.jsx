import { ChevronRight, MapPinned } from "lucide-react";

import { Button } from "../../components/button";
import { Container } from "../../components/container";
import { Motion } from "../../components/motion";
import { Title } from "../../components/title";
import { Subtitle } from "../../components/subtitle";
import { Text } from "../../components/text";

export function Home() {
  return (
    <div className="bg-home bg-cover bg-bottom bg-fixed">
      <Container className="bg-black/70 backdrop-blur-sm flex flex-col-reverse md:flex-row items-center justify-center gap-8 py-8 md:py-16 pt-24 md:pt-32 min-h-[70vh]">
        <Motion className="flex flex-col gap-4">
          <Title color="white">Massas Chasko</Title>
          <Subtitle color="green">
            Somos uma empresa de massas feitas 100% caseiras.
          </Subtitle>
          <Text color="white">
            Possuímos um amplo e moderno catálogo de massas e produtos
            congelados. Somos a marca mais conhecida e querida entre nossos
            consumidores. Conheça mais e experimente nossos produtos!
          </Text>
          <div>
            <Button>
              Conheça Nossos Produtos <ChevronRight className="size-5" />
            </Button>
          </div>
        </Motion>
        <Motion className="shrink-0 w-80 max-w-full">
          <img className="px-8 size-full" src="/logo.svg" />
        </Motion>
      </Container>
      <Container className="bg-green-600 py-4 md:py-8">
        <Motion className="text-center flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          <Subtitle color="white">Faça Seu Pedido:</Subtitle>
          <div>
            <Button externalLink="https://api.whatsapp.com/send/?phone=5542998138118&text&type=phone_number&app_absent=0">
              <img className="size-5" src="/whatsapp.svg" alt="WhatsApp" />
              42 99813-8118
            </Button>
          </div>
        </Motion>
      </Container>
      <Container className="bg-zinc-900 flex flex-col md:flex-row items-center justify-center gap-8 py-8 md:py-16">
        <Motion className="shrink-0 w-80 h-60 max-w-full">
          <iframe
            className="size-full rounded-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.11538304367!2d-50.66692692645915!3d-25.467822377537715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e87ff69ac3bb7f%3A0x6ce328b1484e5785!2sMassas%20Chasko!5e0!3m2!1spt-BR!2sbr!4v1698878432446!5m2!1spt-BR!2sbr"
          ></iframe>
          <img
            className="size-32 relative bottom-60 left-48 hover:-translate-x-4 hover:translate-y-4 hover:scale-125 transition ease-in-out duration-300"
            src="/localizacao.webp"
          />
        </Motion>
        <Motion className="flex flex-col gap-4">
          <Subtitle color="green">Conheça Nossa Loja!</Subtitle>
          <Text color="white">
            Estamos localizados na:{" "}
            <span className="font-bold">
              Rua Camacuã, 43, Rio Bonito, Irati - PR
            </span>
          </Text>
          <div>
            <Button>
              <MapPinned className="size-5" />
              Localização
            </Button>
          </div>
        </Motion>
      </Container>
    </div>
  );
}
