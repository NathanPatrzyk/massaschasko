import { Container } from "../../components/container";
import { Motion } from "../../components/motion";
import { Subtitle } from "../../components/subtitle";
import { Text } from "../../components/text";

export function LinkToProduct({ page }) {
  return (
    <Container className="bg-white backdrop-blur-sm flex flex-col-reverse md:flex-row items-center justify-center gap-8 py-8 md:py-16">
      <Motion className="flex flex-col gap-4">
        <Subtitle color="green">{page.name}</Subtitle>
        <Text color="slate-900">{page.description}</Text>
      </Motion>
    </Container>
  );
}
