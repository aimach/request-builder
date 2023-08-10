import { translation } from "../utils/data";
import "../../App.css";
import "./tutorial.css";
import PropTypes from "prop-types";
import FirstStep from "./firstStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";
import FourthStep from "./FourthStep";
import FifthStep from "./FifthStep";
import SixthStep from "./SixthStep";
import SeventhStep from "./SeventhStep";
import EighthStep from "./EighthStep";
export default function Tutorial({ lang, setShowTutorial, setStep, step }) {
  const english = lang === "en";

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
        {step === 1 && <FirstStep lang={lang} />}
        {step === 2 && <SecondStep lang={lang} />}
        {step === 3 && <ThirdStep lang={lang} />}
        {step === 4 && <FourthStep lang={lang} />}
        {step === 5 && <FifthStep lang={lang} />}
        {step === 6 && <SixthStep lang={lang} />}
        {step === 7 && <SeventhStep lang={lang} />}
        {step === 8 && <EighthStep lang={lang} />}
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