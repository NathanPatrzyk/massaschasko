import { MapPinned } from "lucide-react";

import { Button } from "./button";
import { Container } from "./container";
import { Motion } from "./motion";
import { Subtitle } from "./subtitle";
import { Text } from "./text";

export function Location() {
  return (
    <Container className="bg-zinc-900 flex flex-col md:flex-row items-center justify-center gap-8 py-8 md:py-16">
      <Motion className="shrink-0 w-96 max-w-full h-80">
        <iframe
          className="size-full rounded-md"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.11538304367!2d-50.66692692645915!3d-25.467822377537715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e87ff69ac3bb7f%3A0x6ce328b1484e5785!2sMassas%20Chasko!5e0!3m2!1spt-BR!2sbr!4v1698878432446!5m2!1spt-BR!2sbr"
        ></iframe>
      </Motion>
      <Motion className="flex flex-col gap-4">
        <Subtitle color="green">Conheça Nossa Loja!</Subtitle>
        <Text color="white">
          Estamos localizados na:{" "}
          <span className="font-bold">
            Rua Camacuã, 43, Rio Bonito, Irati - PR
          </span>
        </Text>
        <Button
          externalLink="https://maps.app.goo.gl/ojkEPHNLAGeE2PF47"
          bgColor="black"
        >
          <MapPinned className="shrink-0 size-5" />
          Localização
        </Button>
      </Motion>
    </Container>
  );
}
