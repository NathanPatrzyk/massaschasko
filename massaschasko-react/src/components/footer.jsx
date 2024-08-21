import { NavLink } from "react-router-dom";
import { Instagram, Facebook, Mail } from "lucide-react";

import { Button } from "./button";
import { Container } from "./container";
import { Motion } from "./motion";

export function Footer({ pages }) {
  return (
    <>
      <Container className="flex flex-col gap-8 bg-green-600 py-8 transition ease-in-out duration-300 text-white">
        <Motion className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between gap-8">
          <NavLink className="hover:opacity-90" to="/">
            <img className="h-10" src="/logo.svg" alt="Massas Chasko" />
          </NavLink>
          <div className="flex flex-col sm:flex-row justify-center sm:justify-start text-center sm:text-start gap-4 sm:gap-8">
            <NavLink
              className="text-white hover:border-white font-bold transition ease-in-out duration-300 p-1 hover:opacity-80"
              to="/"
            >
              Início
            </NavLink>
            <NavLink
              className="text-white hover:border-white font-bold transition ease-in-out duration-300 p-1 hover:opacity-80"
              to="/sobre"
            >
              Sobre
            </NavLink>
            <div className="flex flex-col gap-4 sm:gap-0">
              <NavLink
                className="text-white hover:border-white font-bold transition ease-in-out duration-300 p-1 hover:opacity-80"
                to="/produtos"
              >
                Produtos
              </NavLink>

              {pages &&
                pages.map((page) => (
                  <NavLink
                    className="text-white transition ease-in-out duration-300 p-1 hover:opacity-80"
                    to={`/produtos/${page.slug}`}
                  >
                    {page.name}
                  </NavLink>
                ))}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <Button
              className="w-full"
              externalLink="https://api.whatsapp.com/send/?phone=5542998138118&text&type=phone_number&app_absent=0"
              bgColor="green"
            >
              <img className="size-5" src="/whatsapp.svg" alt="WhatsApp" />
              42 99813-8118
            </Button>
            <div className="flex justify-between gap-6">
              <Button externalLink="mailto:massas.chasko@yahoo.com.br" small>
                <Mail className="size-5" />
              </Button>
              <Button
                externalLink="https://www.instagram.com/massas_chasko/"
                small
              >
                <Instagram className="size-5" />
              </Button>
              <Button
                externalLink="https://www.facebook.com/massaschasko"
                small
              >
                <Facebook className="size-5" />
              </Button>
            </div>
          </div>
        </Motion>
        <Motion className="flex items-center justify-center">
          <a
            className="hover:opacity-80"
            href="https://www.instagram.com/nwp.software/"
            target="_blank"
          >
            © <span className="underline">NWP Software 2024</span>
          </a>
        </Motion>
      </Container>
    </>
  );
}
