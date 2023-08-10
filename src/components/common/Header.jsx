import "../../App.css";
import logo from "../../assets/logo.svg";
import title from "../../assets/title.png";
import PropTypes from "prop-types";

export default function Header({
  lang,
  setLang,
  setShowTutorial,
  step,
  setStep,
}) {
  const english = lang === "en";

  return (
    <header>
      <div className="flex title-bar">
        <div className={step === 1 ? `tutoStyle` : ""}>
          <img src={logo} alt="logo" className="logo" />
          <img src={title} alt="title" className="title" />
        </div>
        <div className={step === 2 ? `tutoStyle` : ""}>
          {window.innerWidth > 1000 ? (
            <button
              type="button"
              className="button-add"
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
            onClick={() => setLang("en")}
            className={english ? "lang-active" : ""}
          >
            EN
          </button>
          <button
            type="button"
            onClick={() => setLang("fr")}
            className={english ? "" : "lang-active"}
          >
            FR
          </button>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  lang: PropTypes.string,
  setLang: PropTypes.func,
  setShowTutorial: PropTypes.func,
  step: PropTypes.number,
  setStep: PropTypes.func,
};
