import { translation } from "./data";
import "./App.css";
import "./tutorial.css";
import FirstStep from "./components/tutorial/firstStep";
import SecondStep from "./components/tutorial/SecondStep";
import ThirdStep from "./components/tutorial/ThirdStep";
import FourthStep from "./components/tutorial/FourthStep";
import FifthStep from "./components/tutorial/FifthStep";
import SixthStep from "./components/tutorial/SixthStep";
import SeventhStep from "./components/tutorial/SeventhStep";
import EighthStep from "./components/tutorial/EighthStep";
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
