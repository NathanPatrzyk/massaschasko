import { Instagram, Facebook } from "lucide-react";

import { Button } from "./button";
import { Container } from "./container";
import { Motion } from "./motion";
import { Subtitle } from "./subtitle";
import { Text } from "./text";

export function SocialMedia() {
  return (
    <Container className="bg-zinc-900 flex flex-col md:flex-row items-center justify-center gap-8 py-8 md:py-16">
      <Motion className="shrink-0 grid grid-cols-3 gap-2 size-96 max-w-[78vw] max-h-[78vw]">
        <div className="bg-post1 rounded-md bg-contain hover:scale-105 transition ease-in-out duration-300"></div>
        <div className="bg-post2 rounded-md bg-contain hover:scale-105 transition ease-in-out duration-300"></div>
        <div className="bg-post3 rounded-md bg-contain hover:scale-105 transition ease-in-out duration-300"></div>
        <div className="bg-post4 rounded-md bg-contain hover:scale-105 transition ease-in-out duration-300"></div>
        <div className="bg-post5 rounded-md bg-contain hover:scale-105 transition ease-in-out duration-300"></div>
        <div className="bg-post6 rounded-md bg-contain hover:scale-105 transition ease-in-out duration-300"></div>
        <div className="bg-post7 rounded-md bg-contain hover:scale-105 transition ease-in-out duration-300"></div>
        <div className="bg-post8 rounded-md bg-contain hover:scale-105 transition ease-in-out duration-300"></div>
        <div className="bg-post9 rounded-md bg-contain hover:scale-105 transition ease-in-out duration-300"></div>
      </Motion>
      <Motion className="flex flex-col gap-4 max-w-full">
        <Subtitle color="green">REDES SOCIAIS</Subtitle>
        <Text color="white">Instagram:</Text>
        <Button
          bgColor="black"
          externalLink="https://www.instagram.com/massas_chasko/"
        >
          <Instagram className="shrink-0 size-5" />
          <span className="truncate">@massas_chasko</span>
        </Button>
        <Text color="white">Facebook:</Text>
        <Button
          bgColor="black"
          externalLink="https://www.facebook.com/massaschasko"
        >
          <Facebook className="shrink-0 size-5" />
          Massas Chasko
        </Button>
      </Motion>
    </Container>
  );
}
