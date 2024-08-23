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
        pages.map((page) => page.id == 5 && <LinkToProduct page={page} />)}

      <Contact />

      <Location />

      <SocialMedia />
    </div>
  );
}
