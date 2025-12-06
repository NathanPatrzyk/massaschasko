import { ProductDetail } from "./product-detail";
import { Container } from "../../components/container";

export function ProductsDetails() {
  return (
    <Container className="bg-zinc-100 flex flex-col gap-8 py-8 md:py-16 pt-24 md:pt-32 w-full">
      <ProductDetail />
    </Container>
  );
}
