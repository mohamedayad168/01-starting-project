import reactImg from "../../assets/react-core-concepts.png";
const reactDescription = ["Core", "Fundamental", "Component"];
import "./Header.css";

function getRandomNum(max) {
  return Math.floor(Math.random() * (max + 1));
}
export default function Header() {
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {reactDescription[getRandomNum(2)]} React concepts you will need for
        almost any app you are going to build!
      </p>
    </header>
  );
}
