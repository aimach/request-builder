import { useContext } from "react";
import "../../assets/styles/common.css";
import "./footer.css";
import wild from "../../assets/img/wild.png";
import translation from "../../translation/translation";
import { LanguageContext } from "../../context/languageContext";

export default function Footer() {
  const { language } = useContext(LanguageContext);

  return (
    <div className="flex footer">
      {language === "en" ? translation.en.made : translation.fr.made}
      <a href="https://github.com/aimach" target="_black" rel="noreferrer">
        Aimach
      </a>
      {language === "en" ? translation.en.for : translation.fr.for}
      <a href="//www.wildcodeschool.com/" target="_blank" rel="noreferrer">
        <img src={wild} width="50" alt="wild" />
      </a>
    </div>
  );
}
