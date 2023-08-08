import "./App.css";
import { infos, translation } from "./data";

export default function Modal({ setShowModal, modalContent }) {
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
