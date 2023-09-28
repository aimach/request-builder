import { useContext } from "react";
import { LanguageContext } from "../../context/languageContext";
import translation from "../../translation/translation";
import question from "../../assets/img/question.png";
import close from "../../assets/img/close.png";
import PropTypes from "prop-types";

export default function InputKeyValue({
  setShowHelpModal,
  setModalContent,
  setRequest,
  request,
  name,
}) {
  const { language } = useContext(LanguageContext);

  return (
    <>
      <div className="flex input-with-add">
        <div>
          <label className="label-title">{translation[language][name]}</label>
          <button
            onClick={(e) => {
              e.preventDefault();
              setShowHelpModal(true);
              setModalContent(name);
            }}
          >
            <img src={question} alt="question" width="15" height="15" />
          </button>
        </div>
        {request.method === "get" &&
        (name === "body" || name === "params") ? null : (
          <button
            type="button"
            onClick={() =>
              setRequest({
                ...request,
                [name]: [...request[name], { key: "", value: "" }],
              })
            }
            disabled={request.method === "get" && name === "body"}
            className="button-color"
          >
            {translation[language].add}
          </button>
        )}
      </div>
      <div className="flex-column">
        {request[name].map((element, index) => {
          return (
            <div key={index} className="key-value-container">
              {translation[language].key}
              <input
                type="text"
                name={`${name}Key`}
                value={request[name][index].key}
                onChange={(e) => {
                  request[name][index].key = e.target.value;
                  setRequest({
                    ...request,
                    [name]: [...request[name]],
                  });
                }}
                disabled={name === "body" && request.method === "get"}
              />
              {translation[language].value}
              <input
                type="text"
                name={`${name}Value`}
                value={request[name][index].value}
                onChange={(e) => {
                  request[name][index].value = e.target.value;
                  setRequest({
                    ...request,
                    [name]: [...request[name]],
                  });
                }}
                disabled={name === "body" && request.method === "get"}
              />
              {request[name].length > 1 ? (
                <button
                  type="button"
                  onClick={() => {
                    const newObject = request[name].filter(
                      (el) => el !== element
                    );
                    setRequest({
                      ...request,
                      [name]: newObject,
                    });
                  }}
                >
                  <img src={close} alt="close" width="15" height="15" />
                </button>
              ) : null}
            </div>
          );
        })}
      </div>
    </>
  );
}

InputKeyValue.propTypes = {
  setShowHelpModal: PropTypes.func,
  setModalContent: PropTypes.func,
  setRequest: PropTypes.func,
  request: PropTypes.shape({
    method: PropTypes.string,
    body: PropTypes.arrayOf(PropTypes.object),
  }),
  name: PropTypes.string,
};
