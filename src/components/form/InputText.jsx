import { useContext } from "react";
import { LanguageContext } from "../../context/languageContext";
import translation from "../../translation/translation";
import question from "../../assets/img/question.png";
import PropTypes from "prop-types";
import { regex } from "./formData";

export default function InputText({
  setShowHelpModal,
  setModalContent,
  setRequest,
  request,
  errors,
  setErrors,
  name,
}) {
  const { language } = useContext(LanguageContext);

  // VALIDATE DATA WITH REGEX
  const verifyData = (e, dataType) => {
    if (e.target.value.match(dataType) || e.target.value == "") {
      setRequest({ ...request, [e.target.name]: e.target.value });
      setErrors({ ...errors, [e.target.name]: false });
    } else {
      setErrors({ ...errors, [e.target.name]: true });
    }
  };

  return (
    <>
      <div className="flex">
        <label className="label-title">{translation[language][name]}</label>
        <button
          onClick={(e) => {
            e.preventDefault();
            setShowHelpModal(true);
            setModalContent(name);
          }}
          className="help"
        >
          <img src={question} alt="question" width="15" height="15" />
        </button>
      </div>
      <div>
        <input
          type="text"
          name={name}
          placeholder={name === "localhost" ? "localhost" : ""}
          value={request[name]}
          onChange={(e) => verifyData(e, regex[name])}
        />
        {errors[name] ? (
          <p className="error">{translation[language].errorSpecialChar}</p>
        ) : null}
      </div>
    </>
  );
}

InputText.propTypes = {
  setShowHelpModal: PropTypes.func,
  setModalContent: PropTypes.func,
  setRequest: PropTypes.func,
  request: PropTypes.object,
  name: PropTypes.string,
  errors: PropTypes.object,
  setErrors: PropTypes.func,
};
