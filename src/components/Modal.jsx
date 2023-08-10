import "../App.css";
import { infos, translation } from "./utils/data";
import PropTypes from "prop-types";

export default function Modal({ setShowModal, modalContent, lang }) {
  const information = infos.filter((el) => el.name === modalContent);
  const english = lang === "en";

  return (
    <div className="background-modal">
      <div className="content-modal flex-column">
        <p>{english ? information[0].en : information[0].fr}</p>
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
