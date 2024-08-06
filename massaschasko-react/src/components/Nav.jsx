import { NavLink } from "react-router-dom";
import { X, Menu, ChevronDown, ChevronUp } from "lucide-react";

import { Container } from "./container";
import { Motion } from "./motion";

import { useState, useEffect } from "react";

export function Nav({ pages }) {
  const [opacity, setOpacity] = useState(100);
  const [menu, setMenu] = useState(false);
  const [links, setLinks] = useState(false);
  const [linksMobile, setLinksMobile] = useState(false);

  const openMenu = () => {
    setMenu(true);
  };

  const closeMenu = () => {
    setMenu(false);
    setLinksMobile(false);
  };

  const openLinks = () => {
    setLinks(true);
  };

  const closeLinks = () => {
    setLinks(false);
  };

  const openLinksMobile = () => {
    setLinksMobile(true);
  };

  const closeLinksMobile = () => {
    setLinksMobile(false);
  };

  const opacityClasses = {
    100: "bg-opacity-100",
    90: "bg-opacity-90",
  };

  const changeOpacity = () => {
    if (window.scrollY >= 64) {
      setOpacity(90);
    } else {
      setOpacity(100);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeOpacity);
    return () => {
      window.removeEventListener("scroll", changeOpacity);
    };
  }, []);

  return (
    <>
      <Container
        className={`bg-green-600 ${
          menu ? opacityClasses[100] : opacityClasses[opacity]
        } hover:bg-opacity-100 transition ease-in-out duration-300 font-bold fixed top-0 left-0 flex items-center justify-between py-3 w-screen z-10`}
      >
        <Motion>
          <NavLink className="hover:opacity-90" to="/">
            <img className="h-10" src="/logo.webp" alt="Massas Chasko" />
          </NavLink>
        </Motion>
        <Motion className="hidden items-center gap-2 sm:flex">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-green-950 border-green-950 transition ease-in-out duration-300 p-1 border-b-2"
                : "text-white hover:border-white transition ease-in-out duration-300 p-1 border-b-2 border-transparent hover:opacity-80  hover:border-opacity-80"
            }
            to="/"
          >
            Início
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-green-950 border-green-950 transition ease-in-out duration-300 p-1 border-b-2"
                : "text-white hover:border-white transition ease-in-out duration-300 p-1 border-b-2 border-transparent hover:opacity-80  hover:border-opacity-80"
            }
            to="/sobre"
          >
            Sobre
          </NavLink>

          {links ? (
            <NavLink
              className="text-white hover:border-white transition ease-in-out duration-300 p-1 border-b-2 border-transparent hover:opacity-80 hover:border-opacity-80"
              onClick={closeLinks}
            >
              Produtos
              <ChevronUp className="inline" />
            </NavLink>
          ) : (
            <NavLink
              className="text-white hover:border-white transition ease-in-out duration-300 p-1 border-b-2 border-transparent hover:opacity-80 hover:border-opacity-80"
              onClick={openLinks}
            >
              Produtos
              <ChevronDown className="inline" />
            </NavLink>
          )}
        </Motion>
        <Motion className="flex items-center gap-2 sm:hidden">
          {menu ? (
            <X
              className="size-10 text-white transition ease-in-out duration-300"
              onClick={closeMenu}
            />
          ) : (
            <Menu
              className="size-10 text-white transition ease-in-out duration-300"
              onClick={openMenu}
            />
          )}
        </Motion>
      </Container>

      {menu &&
        (linksMobile ? (
          <Container className="bg-green-600 bg-opacity-100 transition ease-in-out duration-300 font-bold fixed top-16 left-0 flex items-center justify-between py-3 w-screen z-10 flex-wrap">
            <Motion>
              <NavLink
                className="text-white transition ease-in-out duration-300 p-1 hover:opacity-80"
                to="/"
              >
                Início
              </NavLink>
            </Motion>
            <Motion>
              <NavLink
                className="text-white transition ease-in-out duration-300 p-1 hover:opacity-80"
                to="/sobre"
              >
                Sobre
              </NavLink>
            </Motion>
            <Motion>
              {linksMobile ? (
                <NavLink
                  className="text-white hover:border-white transition ease-in-out duration-300 p-1 border-b-2 border-transparent hover:opacity-80 hover:border-opacity-80"
                  onClick={closeLinksMobile}
                >
                  Produtos
                  <ChevronUp className="inline" />
                </NavLink>
              ) : (
                <NavLink
                  className="text-white hover:border-white transition ease-in-out duration-300 p-1 border-b-2 border-transparent hover:opacity-80 hover:border-opacity-80"
                  onClick={openLinksMobile}
                >
                  Produtos
                  <ChevronDown className="inline" />
                </NavLink>
              )}
            </Motion>
          </Container>
        ) : (
          <Container className="bg-green-600 bg-opacity-90 hover:bg-opacity-100 transition ease-in-out duration-300 font-bold fixed top-16 left-0 flex items-center justify-between py-3 w-screen z-10 flex-wrap">
            <Motion>
              <NavLink
                className="text-white transition ease-in-out duration-300 p-1 hover:opacity-80"
                to="/"
              >
                Início
              </NavLink>
            </Motion>
            <Motion>
              <NavLink
                className="text-white transition ease-in-out duration-300 p-1 hover:opacity-80"
                to="/sobre"
              >
                Sobre
              </NavLink>
            </Motion>
            <Motion>
              {linksMobile ? (
                <NavLink
                  className="text-white hover:border-white transition ease-in-out duration-300 p-1 border-b-2 border-transparent hover:opacity-80 hover:border-opacity-80"
                  onClick={closeLinksMobile}
                >
                  Produtos
                  <ChevronUp className="inline" />
                </NavLink>
              ) : (
                <NavLink
                  className="text-white hover:border-white transition ease-in-out duration-300 p-1 border-b-2 border-transparent hover:opacity-80 hover:border-opacity-80"
                  onClick={openLinksMobile}
                >
                  Produtos
                  <ChevronDown className="inline" />
                </NavLink>
              )}
            </Motion>
          </Container>
        ))}

      {links && (
        <Container className="bg-green-600 bg-opacity-90 hover:bg-opacity-100 transition ease-in-out duration-300 fixed top-16 left-0 py-3 w-screen z-10 grid grid-rows-3 grid-flow-col-dense gap-4 justify-between">
          {pages.map((page) => (
            <Motion>
              <NavLink
                className="text-white transition ease-in-out duration-300 p-1 hover:opacity-80"
                to={`/produtos/${page.slug}`}
              >
                {page.name}
              </NavLink>
            </Motion>
          ))}
          <Motion>
            <NavLink
              className="text-white transition ease-in-out duration-300 p-1 hover:opacity-80"
              to="/produtos"
            >
              Todos os Produtos
            </NavLink>
          </Motion>
        </Container>
      )}

      {menu && linksMobile && (
        <Container className="bg-green-600 bg-opacity-90 hover:bg-opacity-100 transition ease-in-out duration-300 fixed top-[113.46px] left-0 py-3 w-screen z-10 grid grid-rows-3 grid-flow-col-dense gap-4 justify-between">
          {pages.map((page) => (
            <Motion>
              <NavLink
                className="text-white transition ease-in-out duration-300 p-1 hover:opacity-80"
                to={`/produtos/${page.slug}`}
              >
                {page.name}
              </NavLink>
            </Motion>
          ))}
          <Motion>
            <NavLink
              className="text-white transition ease-in-out duration-300 p-1 hover:opacity-80"
              to="/produtos"
            >
              Todos os Produtos
            </NavLink>
          </Motion>
        </Container>
      )}
    </>
  );
}
