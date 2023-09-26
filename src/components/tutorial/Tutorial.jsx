import { useContext } from "react";
import { LanguageContext } from "../../context/languageContext";
import translation from "../../translation/translation";
import "../../assets/styles/common.css";
import "./tutorial.css";
import PropTypes from "prop-types";
import Step from "./Step";
export default function Tutorial({ lang, setShowTutorial, setStep, step }) {
  const { language } = useContext(LanguageContext);

  return (
    <>
      <div className="button-tuto-container">
        <button
          type="button"
          onClick={() => setStep(step - 1)}
          className={`button-tuto ${step === 1 ? "hidden" : ""}`}
        >
          {translation[language].previous}
        </button>
        {step < 8 ? (
          <button
            type="button"
            onClick={() => {
              setStep(step + 1);
              step === 8 ? setShowTutorial(false) : setShowTutorial(true);
            }}
            className="button-tuto"
          >
            {translation[language].next}
          </button>
        ) : null}

        <button
          type="button"
          onClick={() => {
            setShowTutorial(false);
            setStep(0);
          }}
          className="button-tuto close"
        >
          {translation[language].close}
        </button>
      </div>
      <div className={`tutorial-content ${step < 6 ? "right" : "left"}`}>
        <Step lang={lang} step={step} />
      </div>
    </>
  );
}

Tutorial.propTypes = {
  lang: PropTypes.string,
  setShowTutorial: PropTypes.func,
  setStep: PropTypes.func,
  step: PropTypes.number,
};
