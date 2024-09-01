import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { Container } from "../../components/container";
import { Motion } from "../../components/motion";
import { Title } from "../../components/title";
import { Subtitle } from "../../components/subtitle";
import { Text } from "../../components/text";
import { Button } from "../../components/button";

import { useFetch } from "../../hooks/useFetch";

export function Products({ pages }) {
  const { slug } = useParams();

  const [page, setPage] = useState();

  const [previousPage, setPreviousPage] = useState();
  const [nextPage, setNextPage] = useState();

  useEffect(() => {
    if (pages) {
      const currentPage = pages.find((p) => p.slug === slug);
      if (currentPage) {
        setPage(currentPage);
        setPreviousPage(pages.find((p) => p.id === currentPage.id - 1) || null);
        setNextPage(pages.find((p) => p.id === currentPage.id + 1) || null);
      }
    }
  }, [slug, pages]);

  const url = "http://localhost:8787";
  const categoriesUrl = page ? `${url}/pages/${page.id}/categories` : null;

  const { data: categories, loading, error } = useFetch(categoriesUrl);

  return (
    <>
      <Container className="bg-white flex flex-col items-center justify-center gap-8 py-8 md:py-16 pt-24 md:pt-32 w-full">
        <Motion className="flex items-center justify-between w-full">
          {previousPage ? (
            <Link
              to={`/produtos/${previousPage.slug}`}
              className="text-green-600 font-semibold underline transition ease-in-out duration-300 hover:opacity-80"
            >
              Anterior
            </Link>
          ) : (
            <div></div>
          )}
          {nextPage && (
            <Link
              to={`/produtos/${nextPage.slug}`}
              className="text-green-600 font-semibold underline transition ease-in-out duration-300 hover:opacity-80"
            >
              Próximo
            </Link>
          )}
        </Motion>
        <Motion className="flex flex-col gap-4 w-full">
          <Title color="black">{page && page.name}</Title>
        </Motion>
        {categories &&
          categories.map((category) => (
            <Motion className="flex flex-col gap-4 w-full">
              <Subtitle color="green">
                {category.name} - {category.weight}
              </Subtitle>
              <div className="flex flex-col gap-4 p-4 rounded-md border-4 border-zinc-200">
                <img className="bg-green-500 w-full h-72" />
                <h3 className="text-zinc-800 text-xl font-semibold">
                  Nome do Produto
                </h3>
                <Text color="black">Peso líquido: Peso do produto</Text>
                <Button className="block w-full">
                  <img className="size-5" src="/whatsapp.svg" alt="WhatsApp" />{" "}
                  Fazer Pedido
                </Button>
              </div>
            </Motion>
          ))}
      </Container>
    </>
  );
}
