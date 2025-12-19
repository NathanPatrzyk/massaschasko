import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import { Home } from "./pages/home";
import { About } from "./pages/about";
import { Products } from "./pages/products";
import { ProductsDetails } from "./pages/products-details";

import { Nav } from "./components/nav";
import { Footer } from "./components/footer";

import { useFetch } from "./hooks/useFetch";

export function App() {
  const url = import.meta.env.VITE_API_URL;

  const pagesUrl = url + "/pages";

  const { data: pages, loading, error } = useFetch(pagesUrl);

  return (
    <>
      <BrowserRouter>
        <Nav pages={pages} />
        <Routes>
          <Route path="/" element={<Home pages={pages} />} />
          <Route path="/sobre" element={<About />} />
          <Route
            path="/produtos/:categorySlug"
            element={<Products pages={pages} />}
          />
          <Route
            path="/produtos"
            element={<Navigate to="/produtos/pierogues" />}
          />
          <Route
            path="/produtos/:categorySlug/:productSlug"
            element={<ProductsDetails pages={pages} />}
          />
        </Routes>
        <Footer pages={pages} />
      </BrowserRouter>
    </>
  );
}
