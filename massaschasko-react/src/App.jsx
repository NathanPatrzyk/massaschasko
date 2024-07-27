import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./pages/home";

import { Nav } from "./components/nav";

export function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
