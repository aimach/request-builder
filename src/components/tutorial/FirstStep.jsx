import wild from "../../assets/wild.png";
import "../../App.css";
export default function FirstStep() {
  return (
    <p>
      Welcome to Request Builder! <br />I am a tool to assist you in
      constructing your HTTP requests and gaining a better understanding of
      their structure in ExpressJS. <br />I am developped and maintained by{" "}
      <a href="https://github.com/aimach" target="_black" rel="noreferrer">
        Aimach
      </a>{" "}
      for
      <a href="//www.wildcodeschool.com/" target="_blank" rel="noreferrer">
        <img src={wild} width="50" alt="wild" />
      </a>
      .
    </p>
  );
}
