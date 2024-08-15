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
      <Container className="bg-black/70 backdrop-blur-sm flex flex-col md:flex-row items-center justify-center gap-8 py-8 md:py-16 pt-24 md:pt-32 min-h-[70vh]">
        <Motion className="flex flex-col gap-4 order-last md:order-first">
          <Title color="white">Massas Chasko</Title>
          <Subtitle color="green-600">
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
        <Motion className="shrink-0 w-full max-w-64 h-[155px]">
          <img className="size-full" src="/logo.svg" />
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
        <Motion className="shrink-0 size-80 max-w-full order-last md:order-first">
          <iframe
            className="size-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.11538304367!2d-50.66692692645915!3d-25.467822377537715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e87ff69ac3bb7f%3A0x6ce328b1484e5785!2sMassas%20Chasko!5e0!3m2!1spt-BR!2sbr!4v1698878432446!5m2!1spt-BR!2sbr"
          ></iframe>
        </Motion>
        <Motion className="flex-1 flex flex-col gap-4">
          <Subtitle color="green-600">Conheça Nossa Loja!</Subtitle>
          <Text color="white">
            Estamos localizados na:
            <div className="font-bold">
              Rua Camacuã, 43, Rio Bonito, Irati - PR
            </div>
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
