import { Container } from "../../components/container";
import { Motion } from "../../components/motion";
import { Title } from "../../components/title";

export function Products() {
  return (
    <Container className="bg-white flex flex-col-reverse md:flex-row items-center justify-center gap-8 py-8 md:py-16 pt-24 md:pt-32 min-h-[70vh]">
      <Motion className="flex flex-col gap-4">
        <Title color="black">Produtos</Title>
      </Motion>
    </Container>
  );
}
