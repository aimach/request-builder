import "../App.css";
import { infos, translation } from "./utils/data";
import PropTypes from "prop-types";

export default function Modal({ setShowModal, modalContent, lang }) {
  const english = lang === "en";

  return (
    <div className="background-modal">
      <div className="content-modal flex-column">
        <h3>
          {english
            ? infos.en[modalContent].title
            : infos.fr[modalContent].title}
        </h3>
        <p>
          {english
            ? infos.en[modalContent].content
            : infos.fr[modalContent].content}
        </p>
        <button
          type="button"
          onClick={() => setShowModal(false)}
          className="button-add"
        >
          {english ? translation.en.close : translation.fr.close}
        </button>
      </div>
    </div>
  );
}

Modal.propTypes = {
  setShowModal: PropTypes.func,
  modalContent: PropTypes.string,
  lang: PropTypes.string,
};
