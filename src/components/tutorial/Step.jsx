import { useContext } from "react";
import tutorial from "./tutorial-data";
import PropTypes from "prop-types";
import { LanguageContext } from "../../context/languageContext";
import "./tutorial.css";

export default function Step({ step }) {
  const { language } = useContext(LanguageContext);
  const contentTutorial = tutorial[step - 1][language];
  return (
    <>
      <h3>{contentTutorial.title}</h3>
      <br />
      <p>{contentTutorial.firstParagraph}</p>
      {contentTutorial.secondParagraph ? (
        <>
          <br />
          <p>{contentTutorial.secondParagraph}</p>
        </>
      ) : null}
      {contentTutorial.thirdParagraph ? (
        <>
          <br />
          <p>{contentTutorial.thirdParagraph}</p>
        </>
      ) : null}
      {contentTutorial.example ? (
        <>
          <br />
          <p className="example">{contentTutorial.example}</p>
        </>
      ) : null}
    </>
  );
}

Step.propTypes = {
  step: PropTypes.number,
};
