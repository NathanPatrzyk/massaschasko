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
          (page) => page.id == 1 && <LinkToProduct imageLeft page={page} />
        )}

      <Contact />

      {pages &&
        pages.map(
          (page) => page.id == 2 && <LinkToProduct imageRight page={page} />
        )}

      <Location />

      {pages &&
        pages.map(
          (page) => page.id == 3 && <LinkToProduct imageRight page={page} />
        )}

      <SocialMedia />
    </div>
  );
}
