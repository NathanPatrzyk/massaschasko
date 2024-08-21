import { Button } from "./button";
import { Container } from "./container";
import { Motion } from "./motion";
import { Subtitle } from "./subtitle";

export function Contact() {
  return (
    <Container className="bg-green-600 py-4 md:py-8">
      <Motion className="text-center flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
        <Subtitle color="white">Faça Seu Pedido:</Subtitle>
        <Button
          externalLink="https://api.whatsapp.com/send/?phone=5542998138118&text&type=phone_number&app_absent=0"
          bgColor="green"
        >
          <img className="size-5" src="/whatsapp.svg" alt="WhatsApp" />
          42 99813-8118
        </Button>
      </Motion>
    </Container>
  );
}
