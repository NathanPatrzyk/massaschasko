import { NavLink } from "react-router-dom";

import Container from "./Container";

const Nav = () => {
  return (
    <Container className="bg-green-600 opacity-90 font-bold fixed top-0 left-0 flex items-center justify-between py-3 w-screen">
      <figure>
        <img className="h-10" src="/logo.webp" alt="Massas Chasko" />
      </figure>
      <div className="flex items-center gap-2">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-green-950 border-green-950 transition ease-in-out duration-300 p-1 border-b-2 border-transparent"
              : "text-[#ffffff] hover:border-[#ffffff] transition ease-in-out duration-300 p-1 border-b-2 border-transparent hover:opacity-80  hover:border-opacity-80"
          }
          to="/"
        >
          Início
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-green-950 border-green-950 transition ease-in-out duration-300 p-1 border-b-2 border-transparent"
              : "text-[#ffffff] hover:border-[#ffffff] transition ease-in-out duration-300 p-1 border-b-2 border-transparent hover:opacity-80  hover:border-opacity-80"
          }
          to="/sobre"
        >
          Sobre
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-green-950 border-green-950 transition ease-in-out duration-300 p-1 border-b-2 border-transparent"
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
