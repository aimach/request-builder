import { useContext } from "react";
import "../../assets/styles/common.css";
import "./header.css";
import logo from "../../assets/img/logo.svg";
import title from "../../assets/img/title.png";
import PropTypes from "prop-types";
import { LanguageContext } from "../../context/languageContext";

export default function Header({ setShowTutorial, step, setStep }) {
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <header>
      <div className="flex title-bar">
        <div className={step === 1 ? `tuto-style` : ""}>
          <img src={logo} alt="logo" className="logo" />
          <img src={title} alt="title" className="title" />
        </div>
        <div className={step === 2 ? `tuto-style` : ""}>
          {window.innerWidth > 1000 ? (
            <button
              type="button"
              className="button-color"
              onClick={() => {
                setShowTutorial(true);
                setStep(1);
              }}
            >
              Tuto
            </button>
          ) : null}
          <button
            type="button"
            onClick={() => {
              setLanguage("en");
              localStorage.setItem("language", "en");
            }}
            className={language === "en" ? "lang-active" : ""}
          >
            EN
          </button>
          <button
            type="button"
            onClick={() => {
              setLanguage("fr");
              localStorage.setItem("language", "fr");
            }}
            className={language === "en" ? "" : "lang-active"}
          >
            FR
          </button>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  setShowTutorial: PropTypes.func,
  step: PropTypes.number,
  setStep: PropTypes.func,
};
