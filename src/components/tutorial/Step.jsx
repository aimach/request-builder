import { useContext } from "react";
import tutorial from "./tutorial-data";
import PropTypes from "prop-types";
import { LanguageContext } from "../../context/languageContext";

export default function Step({ step }) {
  const { language } = useContext(LanguageContext);
  return (
    <>
      <h3>
        {language === "en"
          ? tutorial[step - 1].en.title
          : tutorial[step - 1].fr.title}
      </h3>
      <br />
      <p>
        {language === "en"
          ? tutorial[step - 1].en.firstParagraph
          : tutorial[step - 1].fr.firstParagraph}
      </p>
      {tutorial[step - 1].en.secondParagraph ? (
        <>
          <br />
          <p>
            {language === "en"
              ? tutorial[step - 1].en.secondParagraph
              : tutorial[step - 1].fr.secondParagraph}
          </p>
        </>
      ) : null}
      {tutorial[step - 1].en.thirdParagraph ? (
        <>
          <br />
          <p>
            {language === "en"
              ? tutorial[step - 1].en.thirdParagraph
              : tutorial[step - 1].fr.thirdParagraph}
          </p>
        </>
      ) : null}
      {tutorial[step - 1].en.example ? (
        <>
          <br />
          <p>
            {language === "en"
              ? tutorial[step - 1].en.example
              : tutorial[step - 1].fr.example}
          </p>
        </>
      ) : null}
    </>
  );
}

Step.propTypes = {
  step: PropTypes.number,
};
