import { Location } from "../../components/location";
import { Contact } from "../../components/contact";
import { SocialMedia } from "../../components/socialmedia";

export function About() {
  return (
    <div className="bg-zinc-900 pt-16">
      <Location />

      <Contact />

      <SocialMedia />
    </div>
  );
}
