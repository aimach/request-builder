import translation from "../../translation/translation";
import "../../assets/styles/common.css";
import "./tutorial.css";
import PropTypes from "prop-types";
import FirstStep from "./firstStep";
import Step from "./Step";
export default function Tutorial({ lang, setShowTutorial, setStep, step }) {
  const english = lang === "en";
  console.log(step); // 1

  return (
    <>
      <div className="button-tuto-container">
        <button
          type="button"
          onClick={() => setStep(step - 1)}
          className="button-tuto"
          disabled={step === 1}
        >
          Previous
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
            Next
          </button>
        ) : null}

        <button
          type="button"
          onClick={() => {
            setShowTutorial(false);
            setStep(0);
          }}
          className="button-tuto"
        >
          {english ? translation.en.close : translation.fr.close}
        </button>
      </div>
      <div className={`tutorial-content ${step < 6 ? "right" : "left"}`}>
        {step === 1 ? (
          <FirstStep lang={lang} />
        ) : (
          <Step lang={lang} step={step} />
        )}
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
