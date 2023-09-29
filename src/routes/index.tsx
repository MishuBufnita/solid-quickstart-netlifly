import { Title } from "solid-start";
import Counter from "~/components/Counter";
import Logo from "./public/OwlPrototypingFinalLogo_horizontal_white.png";

export default function Home() {
  return (
    <main>
      <img src={Logo} />;
      <Title>Owl Prototyping</Title>
      <h1>Welcome to Owl Prototyping</h1>
      <Counter />
      <p>
        Visit{" "}
        <a href="https://start.solidjs.com" target="_blank">
          start.solidjs.com
        </a>{" "}
        to learn how to build SolidStart apps.
      </p>
    </main>
  );
}
