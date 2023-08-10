import { tutorial } from "../utils/data";
import PropTypes from "prop-types";

export default function SixthStep({ lang }) {
  const english = lang === "en";
  return (
    <>
      <h3>
        {english ? tutorial.en.sixthStep.title : tutorial.fr.sixthStep.title}
      </h3>
      <br />
      <p>
        {english
          ? tutorial.en.sixthStep.firstContent
          : tutorial.fr.sixthStep.firstContent}
      </p>
    </>
  );
}

SixthStep.propTypes = {
  lang: PropTypes.string,
};
