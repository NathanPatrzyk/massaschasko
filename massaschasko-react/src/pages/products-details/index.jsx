import { useParams } from "react-router-dom";
import { Container } from "../../components/container";
import { ProductDetails } from "./product-details";
import { useFetch } from "../../hooks/useFetch";

export function ProductsDetails({ pages }) {
  const { productSlug, categorySlug } = useParams();

  // const url = "https://massaschasko-api.nathanpatrzyk11.workers.dev";
  const url = "http://localhost:8787";
  const slugsUrl = `${url}/pages/products/slugs`;
  const { data: slugMap } = useFetch(slugsUrl);

  const productId = slugMap?.find((item) => item.slug === productSlug)?.id;

  const productUrl = productId
    ? `${url}/pages/categories/products/${productId}`
    : null;

  const { data: product, loading } = useFetch(productUrl);

  return (
    <>
      {loading && (
        <div className="bg-zinc-100 flex">
          <p>Carregando...</p>
        </div>
      )}
      {!loading && product && (
        <Container className="bg-zinc-100 flex flex-col gap-8 py-8 md:py-16 pt-24 md:pt-32 w-full">
          <ProductDetails product={product} categorySlug={categorySlug} />
        </Container>
      )}
    </>
  );
}
