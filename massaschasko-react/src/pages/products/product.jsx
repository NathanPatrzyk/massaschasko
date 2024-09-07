import { Text } from "../../components/text";
import { Button } from "../../components/button";

import { useFetch } from "../../hooks/useFetch";

export function Product({ category }) {
  const url = "http://localhost:8787";
  const productsUrl = category
    ? `${url}/pages/categories/${category.id}/products`
    : null;

  const { data: products, loading, error } = useFetch(productsUrl);

  const bgClasses = {
    pieroguedebatata400g: "bg-pieroguedebatata400g",
    pieroguedebatataebacon400g: "bg-pieroguedebatataebacon400g",
    pieroguedebatataecarnedesfiada400g: "bg-pieroguedebatataecarnedesfiada400g",
    pieroguedecalabresa400g: "bg-pieroguedecalabresa400g",
    pieroguedeespinafrericotaebrocolis400g: "bg-pieroguedeespinafrericotaebrocolis400g",
    pieroguedebatataefrango400g: "bg-pieroguedebatataefrango400g",
    pieroguedepizza400g: "bg-pieroguedepizza400g",
    pieroguetradicional2kg: "bg-pieroguetradicional2kg",

    nhoquerecheadodecarnemoida400g: "bg-nhoquerecheadodecarnemoida400g",
    nhoquerecheadodefrango1kg: "bg-nhoquerecheadodefrango1kg",
    nhoquerecheadodequeijo1kg: "bg-nhoquerecheadodequeijo1kg",
    nhoquetradicional400g: "bg-nhoquetradicional400g",
  };

  return (
    <div className="grid xs:grid-cols-responsive grid-cols-1 gap-8 max-w-full">
      {products &&
        products.map((product) => (
          <div className="bg-white flex flex-col justify-center items-center rounded-md gap-4 py-4 divide-y-2 border-2">
            <div className="flex-1 flex flex-col items-center px-4 size-full">
              <div
                className={`${
                  bgClasses[product.imageName]
                } bg-contain hover:scale-105 transition ease-in-out duration-300 aspect-[13/18] size-full max-w-52 rounded-md`}
              ></div>
            </div>
            <div className="flex-1 flex flex-col gap-4 pt-4 w-full">
              <h3 className="text-zinc-800 text-xl text-center font-semibold w-full px-4">
                {product.name}
              </h3>
              <Text className="flex-1 text-center w-full px-4" color="black">
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
          </div>
        ))}
    </div>
  );
}
