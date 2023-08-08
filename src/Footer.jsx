import "./App.css";
import wild from "./assets/wild.png";

export default function Footer() {
  return (
    <div className="flex footer">
      Made with ❤️ by
      <a href="https://github.com/aimach" target="_black" rel="noreferrer">
        Aimach
      </a>
      for
      <a href="//www.wildcodeschool.com/" target="_blank" rel="noreferrer">
        <img src={wild} width="50" alt="wild" />
      </a>
    </div>
  );
}
