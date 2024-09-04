import { Text } from "../../components/text";
import { Button } from "../../components/button";

import { useFetch } from "../../hooks/useFetch";

export function Product({ category }) {
  const url = "http://localhost:8787";
  const productsUrl = category
    ? `${url}/pages/categories/${category.id}/products`
    : null;

  const { data: products, loading, error } = useFetch(productsUrl);

  return (
    <div className="grid xs:grid-cols-responsive grid-cols-1 gap-8 max-w-full">
      {products &&
        products.map((product) => (
          <div className="flex flex-col  gap-4 p-4 rounded-md border-4 border-zinc-200 shrink">
            <img className="bg-green-500 aspect-[13/18] w-full max-w-52" />
            <h3 className="text-zinc-800 text-xl font-semibold w-full">
              {product.name}
            </h3>
            <Text className="w-full" color="black">
              {product.description}
            </Text>
            <Button externalLink="#" isProductLink bgColor="black">
              <img
                className="size-5"
                src="/whatsapp-white.svg"
                alt="WhatsApp"
              />{" "}
              Fazer Pedido
            </Button>
          </div>
        ))}
    </div>
  );
}
