import { useContext } from "react";
import { LanguageContext } from "../../context/languageContext";
import translation from "../../translation/translation";
import question from "../../assets/img/question.png";
import PropTypes from "prop-types";

export default function SelectMethod({
  setShowModal,
  setModalContent,
  setRequest,
  request,
  name,
}) {
  const { language } = useContext(LanguageContext);

  return (
    <>
      <div className="flex">
        <label className="label-title">
          {language === "en" ? translation.en[name] : translation.fr[name]}
        </label>
        <button
          onClick={(e) => {
            e.preventDefault();
            setShowModal(true);
            setModalContent(name);
          }}
        >
          <img src={question} alt="question" width="15" height="15" />
        </button>
      </div>
      <div>
        <select
          name={name}
          value={request[name]}
          onChange={(e) => {
            setRequest({
              ...request,
              [name]: e.target.value,
              body:
                e.target.value === "get"
                  ? [{ key: "", value: "" }]
                  : request.body,
            });
          }}
        >
          <option value="get">GET</option>
          <option value="post">POST</option>
          <option value="put">PUT</option>
          <option value="delete">DELETE</option>
        </select>
      </div>
    </>
  );
}

SelectMethod.propTypes = {
  setShowModal: PropTypes.func,
  setModalContent: PropTypes.func,
  setRequest: PropTypes.func,
  request: PropTypes.object,
  name: PropTypes.string,
};
