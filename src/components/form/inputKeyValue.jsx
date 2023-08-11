import { useContext } from "react";
import { LanguageContext } from "../../context/languageContext";
import translation from "../../translation/translation";
import question from "../../assets/img/question.png";
import close from "../../assets/img/close.png";
import PropTypes from "prop-types";

export default function InputKeyValue({
  setShowModal,
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
        {request.method === "get" && name === "body" ? null : (
          <button
            type="button"
            onClick={() =>
              setRequest({
                ...request,
                [name]: [...request[name], { key: "", value: "" }],
              })
            }
            disabled={request.method === "get"}
            className="button-color"
          >
            {language === "en" ? translation.en.add : translation.fr.add}
          </button>
        )}
      </div>
      <div className="flex-column">
        {request[name].map((element, index) => {
          return (
            <div key={index} className="key-value-container">
              {language === "en" ? translation.en.key : translation.fr.key}
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
              {language === "en" ? translation.en.value : translation.fr.value}
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
  setShowModal: PropTypes.func,
  setModalContent: PropTypes.func,
  setRequest: PropTypes.func,
  request: PropTypes.shape({
    method: PropTypes.string,
    body: PropTypes.arrayOf(PropTypes.object),
  }),
  name: PropTypes.string,
};
