import { useContext } from "react";
import "../../assets/styles/common.css";
import "./help.css";
import { help } from "./help";
import translation from "../../translation/translation";
import PropTypes from "prop-types";
import { LanguageContext } from "../../context/languageContext";

export default function Modal({ setShowModal, modalContent }) {
  const { language } = useContext(LanguageContext);

  return (
    <div className="background-modal">
      <div className="content-modal flex-column">
        <h3>
          {language === "en"
            ? help.en[modalContent].title
            : help.fr[modalContent].title}
        </h3>
        <p>
          {language === "en"
            ? help.en[modalContent].content
            : help.fr[modalContent].content}
        </p>
        <button
          type="button"
          onClick={() => setShowModal(false)}
          className="button-color"
        >
          {language === "en" ? translation.en.close : translation.fr.close}
        </button>
      </div>
    </div>
  );
}

Modal.propTypes = {
  setShowModal: PropTypes.func,
  modalContent: PropTypes.string,
};
