import { useContext } from "react";
import wild from "../../assets/img/wild.png";
import translation from "../../translation/translation";
import tutorial from "./tutorial-data";
import { LanguageContext } from "../../context/languageContext";

export default function FirstStep() {
  const { language } = useContext(LanguageContext);

  return (
    <>
      <h3>{tutorial[0][language].title}</h3>
      <br />
      <p>{tutorial[0][language].firstParagraph}</p>
      <br />
      <p>{tutorial[0][language].secondParagraph}</p>
      <br />
      <p>
        {tutorial[0][language].thirdParagraph}
        <a href="https://github.com/aimach" target="_black" rel="noreferrer">
          Aimach
        </a>
        {translation[language].for}
        <a href="//www.wildcodeschool.com/" target="_blank" rel="noreferrer">
          <img src={wild} width="50" alt="wild" />
        </a>
      </p>
    </>
  );
}
