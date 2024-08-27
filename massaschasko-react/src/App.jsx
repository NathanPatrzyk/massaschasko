import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./pages/home";
import { About } from "./pages/about";
import { Products } from "./pages/products";

import { Nav } from "./components/nav";
import { Footer } from "./components/footer";

import { useFetch } from "./hooks/useFetch";

export function App() {
  const url = "http://localhost:8787";
  const pagesUrl = url + "/pages";

  const { data: pages, loading, error } = useFetch(pagesUrl);

  return (
    <>
      <BrowserRouter>
        <Nav pages={pages} />
        <Routes>
          <Route path="/" element={<Home pages={pages} />}></Route>
          <Route path="/sobre" element={<About />}></Route>
          <Route path="/produtos/:id" element={<Products />}></Route>
        </Routes>
        <Footer pages={pages} />
      </BrowserRouter>
    </>
  );
}
