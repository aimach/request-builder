import wild from "../../assets/wild.png";
import "../../App.css";
import { translation, tutorial } from "../../data";
export default function FirstStep() {
  return (
    <>
      <h3>{tutorial.fr.firstStep.title}</h3>
      <br />
      <p>{tutorial.fr.firstStep.firstContent}</p>
      <br />
      <p>{tutorial.fr.firstStep.secondContent}</p>
      <br />
      <p>
        {tutorial.fr.firstStep.thirdContent}
        <a href="https://github.com/aimach" target="_black" rel="noreferrer">
          Aimach
        </a>
        {translation.fr.for}
        <a href="//www.wildcodeschool.com/" target="_blank" rel="noreferrer">
          <img src={wild} width="50" alt="wild" />
        </a>
      </p>
    </>
  );
}
