import { Container } from "../../components/container";
import { Motion } from "../../components/motion";
import { Title } from "../../components/title";

import { Link, useParams } from "react-router-dom";

export function Products({ pages }) {
  const { slug } = useParams();

  return (
    <>
      {pages &&
        pages.map(
          (page) =>
            page.slug == slug && (
              <Container className="bg-white flex flex-col items-center justify-center gap-8 py-8 md:py-16 pt-24 md:pt-32 w-screen">
                <Motion className="flex items-center justify-between w-full">
                  {pages.map((previousPage) =>
                    previousPage.id == page.id - 1 ? (
                      <Link
                        to={`/produtos/${previousPage.slug}`}
                        className="text-green-600 font-semibold underline transition ease-in-out duration-300 hover:opacity-80"
                      >
                        Anterior
                      </Link>
                    ) : (
                      page.id - 1 == 0 && <div></div>
                    )
                  )}

                  {pages.map(
                    (nextPage) =>
                      nextPage.id === page.id + 1 && (
                        <Link
                          to={`/produtos/${nextPage.slug}`}
                          className="text-green-600 font-semibold underline transition ease-in-out duration-300 hover:opacity-80"
                        >
                          Próximo
                        </Link>
                      )
                  )}
                </Motion>
                <Motion className="flex flex-col gap-4 w-full">
                  <Title color="black">{page.name}</Title>
                </Motion>
              </Container>
            )
        )}
    </>
  );
}
