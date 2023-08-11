import { useEffect, useState, useContext } from "react";
import PropTypes from "prop-types";
import { LanguageContext } from "../../context/languageContext";
import "../../assets/styles/common.css";
import "./form.css";
import "../tutorial/tutorial.css";
import Result from "../result/Result";
import question from "../../assets/img/question.png";
import translation from "../../translation/translation";
import { initialRequest, tutorialRequest, regex } from "./formData";
import InputKeyValue from "./inputKeyValue";

export default function Form({
  setShowModal,
  setModalContent,
  step,
  showTutorial,
}) {
  const { language } = useContext(LanguageContext);
  const [request, setRequest] = useState(initialRequest);
  const [errors, setErrors] = useState({
    host: false,
    port: false,
    method: false,
    endpoint: false,
    params: false,
    query: false,
    body: false,
  });

  // IF TUTORIAL USE EXAMPLE REQUEST
  useEffect(() => {
    showTutorial ? setRequest(tutorialRequest) : setRequest(initialRequest);
  }, [showTutorial]);

  // VALIDATE DATA WITH REGEX
  const verifyData = (e, dataType) => {
    if (e.target.value.match(dataType) || e.target.value == "") {
      setRequest({ ...request, [e.target.name]: e.target.value });
      setErrors({ ...errors, [e.target.name]: false });
    } else {
      setErrors({ ...errors, [e.target.name]: true });
    }
  };

  // DISABLE ENTER KEY BECAUSE HELP BUTTONS
  addEventListener("keypress", function (e) {
    if (e.key === 13) {
      e.preventDefault();
      return false;
    }
  });

  return (
    <div className="flex builder-container">
      <div>
        <form
          className={`flex-column builder-form ${
            step === 3 ? `tuto-style` : ""
          }`}
        >
          <button
            type="button"
            className="button-color button-clear"
            onClick={() => setRequest(initialRequest)}
          >
            {language === "en" ? translation.en.clear : translation.fr.clear}
          </button>
          <div
            className={`builder-form flex-column ${
              step === 4 ? `tuto-style` : ""
            }`}
          >
            <div className="flex">
              <label className="label-title">
                {language === "en" ? translation.en.host : translation.fr.host}
              </label>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setShowModal(true);
                  setModalContent("host");
                }}
                className="help"
              >
                <img src={question} alt="question" width="15" height="15" />
              </button>
            </div>
            <div>
              <input
                type="text"
                name="host"
                placeholder="localhost"
                value={request.host}
                onChange={(e) => verifyData(e, regex.host)}
              />
              {errors.host ? (
                <p className="error">
                  Certains caractères spéciaux ne sont pas acceptés
                </p>
              ) : null}
            </div>
            <div className="flex">
              <label className="label-title">
                {language === "en" ? translation.en.port : translation.fr.port}
              </label>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setShowModal(true);
                  setModalContent("port");
                }}
              >
                <img src={question} alt="question" width="15" height="15" />
              </button>
            </div>
            <div>
              <input
                type="text"
                name="port"
                placeholder="5000"
                value={request.port}
                onChange={(e) => verifyData(e, regex.port)}
              />
              {errors.port ? (
                <p className="error">Uniquement des caractères numériques</p>
              ) : null}
            </div>

            <div className="flex">
              <label className="label-title">
                {language === "en"
                  ? translation.en.method
                  : translation.fr.method}
              </label>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setShowModal(true);
                  setModalContent("method");
                }}
              >
                <img src={question} alt="question" width="15" height="15" />
              </button>
            </div>
            <div>
              <select
                name="method"
                value={request.method}
                onChange={(e) => {
                  regex.method.test(e.target.value) &&
                    setRequest({
                      ...request,
                      method: e.target.value,
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
              {errors.method ? (
                <p className="error">
                  Uniquement les méthodes GET, POST, PUT et DELETE
                </p>
              ) : null}
            </div>
            <div className="flex">
              <label className="label-title">
                {language === "en"
                  ? translation.en.endpoint
                  : translation.fr.endpoint}
              </label>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setShowModal(true);
                  setModalContent("endpoint");
                }}
              >
                <img src={question} alt="question" width="15" height="15" />
              </button>
            </div>
            <div>
              <input
                type="text"
                name="endpoint"
                value={request.endpoint}
                onChange={(e) => verifyData(e, regex.endpoint)}
              />
              {errors.endpoint ? (
                <p className="error">
                  Certains caractères spéciaux ne sont pas acceptés
                </p>
              ) : null}
            </div>
          </div>
          <div
            className={`builder-form flex-column ${
              step === 5 ? `tuto-style` : ""
            }`}
          >
            <InputKeyValue
              setShowModal={setShowModal}
              setModalContent={setModalContent}
              setRequest={setRequest}
              request={request}
              name={"body"}
            />
            <InputKeyValue
              setShowModal={setShowModal}
              setModalContent={setModalContent}
              setRequest={setRequest}
              request={request}
              name={"params"}
            />
            <InputKeyValue
              setShowModal={setShowModal}
              setModalContent={setModalContent}
              setRequest={setRequest}
              request={request}
              name={"query"}
            />
          </div>
        </form>
      </div>
      <Result request={request} step={step} />
    </div>
  );
}

Form.propTypes = {
  setShowModal: PropTypes.func,
  setModalContent: PropTypes.func,
  step: PropTypes.number,
  showTutorial: PropTypes.bool,
};
