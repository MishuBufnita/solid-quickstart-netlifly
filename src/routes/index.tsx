import { Title } from "solid-start";
import Counter from "~/components/Counter";
import Logo from "../../public/OwlPrototypingFinalLogo_horizontal_white.png";
import "./index.css";

export default function Home() {
  return (
    <main>
      <img src={Logo} class="Logo" />
      <Title>Owl Prototyping</Title>
      <h1>Welcome to Owl Prototyping</h1>
      <Counter />
    </main>
  );
}
