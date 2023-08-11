import { useContext } from "react";
import wild from "../../assets/img/wild.png";
import translation from "../../translation/translation";
import tutorial from "./tutorial-data";
import { LanguageContext } from "../../context/languageContext";

export default function FirstStep() {
  const { language } = useContext(LanguageContext);

  return (
    <>
      <h3>{language === "en" ? tutorial[0].en.title : tutorial[0].fr.title}</h3>
      <br />
      <p>
        {language === "en"
          ? tutorial[0].en.firstParagraph
          : tutorial[0].fr.firstParagraph}
      </p>
      <br />
      <p>
        {language === "en"
          ? tutorial[0].en.secondParagraph
          : tutorial[0].fr.secondParagraph}
      </p>
      <br />
      <p>
        {language === "en"
          ? tutorial[0].en.thirdParagraph
          : tutorial[0].fr.thirdParagraph}
        <a href="https://github.com/aimach" target="_black" rel="noreferrer">
          Aimach
        </a>
        {language === "en" ? translation.en.for : translation.fr.for}
        <a href="//www.wildcodeschool.com/" target="_blank" rel="noreferrer">
          <img src={wild} width="50" alt="wild" />
        </a>
      </p>
    </>
  );
}
