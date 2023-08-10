import "../../App.css";
import wild from "../../assets/wild.png";
import { translation } from "../utils/data";
import PropTypes from "prop-types";

export default function Footer({ lang }) {
  const english = lang === "en";

  return (
    <div className="flex footer">
      {english ? translation.en.made : translation.fr.made}
      <a href="https://github.com/aimach" target="_black" rel="noreferrer">
        Aimach
      </a>
      {english ? translation.en.for : translation.fr.for}
      <a href="//www.wildcodeschool.com/" target="_blank" rel="noreferrer">
        <img src={wild} width="50" alt="wild" />
      </a>
    </div>
  );
}

Footer.propTypes = {
  lang: PropTypes.string,
};
