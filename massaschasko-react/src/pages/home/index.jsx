import { Main } from "./main";
import { Contact } from "../../components/contact";
import { Location } from "../../components/location";
import { SocialMedia } from "../../components/socialmedia";

export function Home() {
  return (
    <div className="bg-home bg-cover bg-bottom bg-fixed">
      <Main />

      <Contact />

      <Location />

      <SocialMedia />
    </div>
  );
}
