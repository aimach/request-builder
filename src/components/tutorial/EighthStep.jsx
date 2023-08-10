import { tutorial } from "../utils/data";
import PropTypes from "prop-types";

export default function EighthStep({ lang }) {
  const english = lang === "en";
  return (
    <>
      <h3>
        {english ? tutorial.en.eighthStep.title : tutorial.fr.eighthStep.title}
      </h3>
      <br />
      <p>
        {english
          ? tutorial.en.eighthStep.firstContent
          : tutorial.fr.eighthStep.firstContent}
      </p>
      <br />
      <p>
        {english
          ? tutorial.en.eighthStep.secondContent
          : tutorial.fr.eighthStep.secondContent}
      </p>
    </>
  );
}

EighthStep.propTypes = {
  lang: PropTypes.string,
};
