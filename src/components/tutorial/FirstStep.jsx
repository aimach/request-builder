import wild from "../../assets/wild.png";
import "../../App.css";
import { translation, tutorial } from "../utils/data";
import PropTypes from "prop-types";

export default function FirstStep({ lang }) {
  const english = lang === "en";

  return (
    <>
      <h3>
        {english ? tutorial.en.firstStep.title : tutorial.fr.firstStep.title}
      </h3>
      <br />
      <p>
        {english
          ? tutorial.en.firstStep.firstContent
          : tutorial.fr.firstStep.firstContent}
      </p>
      <br />
      <p>
        {english
          ? tutorial.en.firstStep.secondContent
          : tutorial.fr.firstStep.secondContent}
      </p>
      <br />
      <p>
        {english
          ? tutorial.en.firstStep.thirdContent
          : tutorial.fr.firstStep.thirdContent}
        <a href="https://github.com/aimach" target="_black" rel="noreferrer">
          Aimach
        </a>
        {english ? translation.en.for : translation.fr.for}
        <a href="//www.wildcodeschool.com/" target="_blank" rel="noreferrer">
          <img src={wild} width="50" alt="wild" />
        </a>
      </p>
    </>
  );
}

FirstStep.propTypes = {
  lang: PropTypes.string,
};
