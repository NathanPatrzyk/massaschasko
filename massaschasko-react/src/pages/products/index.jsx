import { Container } from "../../components/container";
import { Motion } from "../../components/motion";
import { Title } from "../../components/title";

import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export function Products({ pages }) {
  const { slug } = useParams();

  if (pages) {
    pages.map((page) => {
      if (page.slug == slug) {
        const previewPageId = page.id - 1;
        const nextPageId = page.id + 1;
      }
    });
  }

  return (
    <Container className="bg-white flex flex-col items-center justify-center gap-8 py-8 md:py-16 pt-24 md:pt-32 w-screen">
      <Motion className="flex items-center justify-between w-full">
        <Link className="text-green-600 font-semibold underline transition ease-in-out duration-300 hover:opacity-80">
          Anterior
        </Link>
        <Link className="text-green-600 font-semibold underline transition ease-in-out duration-300 hover:opacity-80">
          Próximo
        </Link>
      </Motion>
      <Motion className="flex flex-col gap-4 w-full">
        {pages &&
          pages.map(
            (page) =>
              page.slug == slug && <Title color="black">{page.name}</Title>
          )}
      </Motion>
    </Container>
  );
}
