import { useContext } from "react";
import "../../assets/styles/common.css";
import "./footer.css";
import wild from "../../assets/img/wild.png";
import translation from "../../translation/translation";
import { LanguageContext } from "../../context/languageContext";

export default function Footer() {
  const { language } = useContext(LanguageContext);

  return (
    <footer className="flex footer">
      <div className="flex footer">
        RTFM
        <a
          href="https://www.ibm.com/docs/en/cics-ts/5.3?topic=protocol-http-requests"
          target="_blank"
          rel="noreferrer"
        >
          {translation[language].here}
        </a>
        {translation[language].and}
        <a
          href="https://expressjs.com/en/4x/api.html"
          target="_blank"
          rel="noreferrer"
        >
          {translation[language].here}.
        </a>
      </div>
      <div className="flex footer">
        {translation[language].made}
        <a href="https://github.com/aimach" target="_black" rel="noreferrer">
          Aimach
        </a>
        {translation[language].for}
        <a href="//www.wildcodeschool.com/" target="_blank" rel="noreferrer">
          <img src={wild} width="50" alt="wild" />
        </a>
      </div>
    </footer>
  );
}
