import { Main } from "./main";
import { LinkToProduct } from "./linktoproduct";
import { Contact } from "../../components/contact";
import { Location } from "../../components/location";
import { SocialMedia } from "../../components/socialmedia";

export function Home({ pages }) {
  return (
    <div className="bg-home bg-cover bg-bottom bg-fixed">
      <Main />

      {pages &&
        pages.map(
          (page) =>
            page.slug == "pierogues" && (
              <LinkToProduct
                imageLeft
                light
                page={page}
                products={[
                  "pieroguedebatata400g",
                  "pieroguedebatataebacon400g",
                  "pieroguedebatataecarnedesfiada400g",
                  "pieroguedecalabresa400g",
                  "pieroguedeespinafrericotaebrocolis400g",
                  "pieroguedebatataefrango400g",
                  "pieroguedepizza400g",
                  "pieroguetradicional2kg",
                ]}
              />
            )
        )}

      <Contact />

      {pages &&
        pages.map(
          (page) =>
            page.slug == "nhoques" && (
              <LinkToProduct
                imageRight
                light
                page={page}
                products={[
                  "nhoquerecheadodecarnemoida400g",
                  "nhoquerecheadodefrango1kg",
                  "nhoquerecheadodequeijo1kg",
                  "nhoquetradicional400g",
                ]}
              />
            )
        )}

      <Location />

      {pages &&
        pages.map(
          (page) =>
            page.slug == "croissants" && (
              <LinkToProduct imageRight light page={page} />
            )
        )}

      <SocialMedia />

      {pages &&
        pages.map(
          (page) =>
            page.slug == "esfihas" && (
              <LinkToProduct imageRight light page={page} />
            )
        )}

      {pages &&
        pages.map(
          (page) =>
            page.slug == "paes-de-queijo" && (
              <LinkToProduct imageLeft dark page={page} />
            )
        )}

      {pages &&
        pages.map(
          (page) =>
            page.slug == "outros-produtos" && (
              <LinkToProduct imageRight light page={page} />
            )
        )}
    </div>
  );
}
