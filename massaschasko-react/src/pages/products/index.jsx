import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { Container } from "../../components/container";
import { Motion } from "../../components/motion";
import { Title } from "../../components/title";
import { Subtitle } from "../../components/subtitle";
import { Product } from "./product";

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
        setPreviousPage(pages.find((p) => p.id === currentPage.id - 1));
        setNextPage(pages.find((p) => p.id === currentPage.id + 1));
      }
    }
  }, [slug, pages]);

  const url = "https://massaschasko-api.nathanpatrzyk11.workers.dev";
  // const url = "http://localhost:8787";

  const categoriesUrl = page ? `${url}/pages/${page.id}/categories` : null;

  const { data: categories, loading, error } = useFetch(categoriesUrl);

  return (
    <>
      {loading && (
        <div className="h-screen bg-zinc-100 flex justify-center py-8 md:py-16 pt-24 md:pt-32">
          <p className="text-zinc-900">Carregando...</p>
        </div>
      )}
      {!loading && (
        <Container className="bg-zinc-100 flex flex-col gap-8 py-8 md:py-16 pt-24 md:pt-32 w-full">
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
          <Motion className="flex flex-col gap-8 w-full">
            <Title color="black">{page && page.name}</Title>
          </Motion>
          {categories &&
            categories.map((category) => (
              <Motion className="flex flex-col gap-8">
                <Subtitle color="green">
                  {category.name} - {category.weight}
                </Subtitle>
                <Product category={category} />
              </Motion>
            ))}
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
        </Container>
      )}
    </>
  );
}
