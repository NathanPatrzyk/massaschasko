import { NavLink } from "react-router-dom";
import Container from "./Container";
import { useState, useEffect } from "react";

const Nav = () => {
  const [opacity, setOpacity] = useState(100);

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

  const opacityClasses = {
    100: "bg-opacity-100",
    90: "bg-opacity-90",
  };

  return (
    <Container
      className={`bg-green-600 ${opacityClasses[opacity]} hover:bg-opacity-100 transition ease-in-out duration-300 font-bold fixed top-0 left-0 flex items-center justify-between py-3 w-screen`}
    >
      <figure>
        <NavLink className="hover:opacity-90" to="/">
          <img className="h-10" src="/logo.webp" alt="Massas Chasko" />
        </NavLink>
      </figure>
      <div className="flex items-center gap-2">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-green-950 border-green-950 transition ease-in-out duration-300 p-1 border-b-2"
              : "text-[#ffffff] hover:border-[#ffffff] transition ease-in-out duration-300 p-1 border-b-2 border-transparent hover:opacity-80  hover:border-opacity-80"
          }
          to="/"
        >
          Início
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-green-950 border-green-950 transition ease-in-out duration-300 p-1 border-b-2"
              : "text-[#ffffff] hover:border-[#ffffff] transition ease-in-out duration-300 p-1 border-b-2 border-transparent hover:opacity-80  hover:border-opacity-80"
          }
          to="/sobre"
        >
          Sobre
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-green-950 border-green-950 transition ease-in-out duration-300 p-1 border-b-2"
              : "text-[#ffffff] hover:border-[#ffffff] transition ease-in-out duration-300 p-1 border-b-2 border-transparent hover:opacity-80 hover:border-opacity-80"
          }
          to="/produtos"
        >
          Produtos
        </NavLink>
      </div>
    </Container>
  );
};

export default Nav;
