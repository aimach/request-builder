import { useContext } from "react";
import "../../assets/styles/common.css";
import "./help.css";
import { help } from "./help";
import translation from "../../translation/translation";
import PropTypes from "prop-types";
import { LanguageContext } from "../../context/languageContext";

export default function HelpModal({ setShowHelpModal, modalContent }) {
  const { language } = useContext(LanguageContext);

  return (
    <div className="background-modal">
      <div className="content-modal flex-column">
        <h3>{help[language][modalContent].title}</h3>
        <p>{help[language][modalContent].content}</p>
        <button
          type="button"
          onClick={() => setShowHelpModal(false)}
          className="button-color"
        >
          {translation[language].close}
        </button>
      </div>
    </div>
  );
}

HelpModal.propTypes = {
  setShowHelpModal: PropTypes.func,
  modalContent: PropTypes.string,
};
