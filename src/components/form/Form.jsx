import { useEffect, useState, useContext } from "react";
import PropTypes from "prop-types";
import { LanguageContext } from "../../context/languageContext";
import "../../assets/styles/common.css";
import "./form.css";
import "../tutorial/tutorial.css";
import Result from "../result/Result";
import question from "../../assets/img/question.png";
import close from "../../assets/img/close.png";
import translation from "../../translation/translation";
import { initialRequest, tutorialRequest, regex } from "./formData";

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
            <div className="flex input-with-add">
              <div>
                <label className="label-title">
                  {language === "en"
                    ? translation.en.body
                    : translation.fr.body}
                </label>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setShowModal(true);
                    setModalContent("body");
                  }}
                >
                  <img src={question} alt="question" width="15" height="15" />
                </button>
              </div>
              {request.method === "get" ? null : (
                <button
                  type="button"
                  onClick={() =>
                    setRequest({
                      ...request,
                      body: [...request.body, { key: "", value: "" }],
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
              {request.body.map((element, index) => {
                return (
                  <div key={index} className="key-value-container">
                    {language === "en"
                      ? translation.en.key
                      : translation.fr.key}
                    <input
                      type="text"
                      name="bodyKey"
                      value={request.body[index].key}
                      onChange={(e) => {
                        request.body[index].key = e.target.value;
                        setRequest({
                          ...request,
                          body: [...request.body],
                        });
                      }}
                      disabled={request.method === "get"}
                    />
                    {language === "en"
                      ? translation.en.value
                      : translation.fr.value}
                    <input
                      type="text"
                      name="bodyValue"
                      value={request.body[index].value}
                      onChange={(e) => {
                        request.body[index].value = e.target.value;
                        setRequest({
                          ...request,
                          body: [...request.body],
                        });
                      }}
                      disabled={request.method === "get"}
                    />
                    {request.body.length > 1 ? (
                      <button
                        type="button"
                        onClick={() => {
                          const newBody = request.body.filter(
                            (el) => el !== element
                          );
                          setRequest({
                            ...request,
                            body: newBody,
                          });
                        }}
                      >
                        <img
                          src={close}
                          alt="question"
                          width="15"
                          height="15"
                        />
                      </button>
                    ) : null}
                  </div>
                );
              })}
            </div>
            <div className="flex input-with-add">
              <div>
                <label className="label-title">
                  {language === "en"
                    ? translation.en.params
                    : translation.fr.params}
                </label>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setShowModal(true);
                    setModalContent("params");
                  }}
                >
                  <img src={question} alt="question" width="15" height="15" />
                </button>
              </div>
              <button
                type="button"
                onClick={() =>
                  setRequest({
                    ...request,
                    params: [...request.params, { key: "", value: "" }],
                  })
                }
                className="button-color"
              >
                {language === "en" ? translation.en.add : translation.fr.add}
              </button>
            </div>
            <div className="flex-column">
              {request.params.map((param, index) => {
                return (
                  <div key={index} className="key-value-container">
                    {language === "en"
                      ? translation.en.key
                      : translation.fr.key}
                    <input
                      type="text"
                      name="paramKey"
                      value={request.params[index].key}
                      onChange={(e) => {
                        request.params[index].key = e.target.value;
                        setRequest({
                          ...request,
                          params: [...request.params],
                        });
                      }}
                    />
                    {language === "en"
                      ? translation.en.value
                      : translation.fr.value}
                    <input
                      type="text"
                      name="paramValue"
                      value={request.params[index].value}
                      onChange={(e) => {
                        request.params[index].value = e.target.value;
                        setRequest({
                          ...request,
                          params: [...request.params],
                        });
                      }}
                    />
                    {request.params.length > 1 ? (
                      <button
                        type="button"
                        onClick={() => {
                          const newParams = request.params.filter(
                            (el) => el !== param
                          );
                          setRequest({
                            ...request,
                            params: newParams,
                          });
                        }}
                      >
                        <img
                          src={close}
                          alt="question"
                          width="15"
                          height="15"
                        />
                      </button>
                    ) : null}
                  </div>
                );
              })}
            </div>
            <div className="flex input-with-add">
              <div>
                <label className="label-title">
                  {language === "en"
                    ? translation.en.query
                    : translation.fr.query}
                </label>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setShowModal(true);
                    setModalContent("query");
                  }}
                >
                  <img src={question} alt="question" width="15" height="15" />
                </button>
              </div>
              <button
                type="button"
                onClick={() =>
                  setRequest({
                    ...request,
                    query: [...request.query, { key: "", value: "" }],
                  })
                }
                className="button-color"
              >
                {language === "en" ? translation.en.add : translation.fr.add}
              </button>
            </div>
            <div className="flex-column">
              {request.query.map((query, index) => {
                return (
                  <div key={index} className="key-value-container">
                    {language === "en"
                      ? translation.en.key
                      : translation.fr.key}
                    <input
                      type="text"
                      name="queryKey"
                      value={request.query[index].key}
                      onChange={(e) => {
                        request.query[index].key = e.target.value;
                        setRequest({
                          ...request,
                          query: [...request.query],
                        });
                      }}
                    />
                    {language === "en"
                      ? translation.en.value
                      : translation.fr.value}
                    <input
                      type="text"
                      name="paramValue"
                      value={request.query[index].value}
                      onChange={(e) => {
                        request.query[index].value = e.target.value;
                        setRequest({
                          ...request,
                          query: [...request.query],
                        });
                      }}
                    />
                    {request.query.length > 1 ? (
                      <button
                        type="button"
                        onClick={() => {
                          const newquery = request.query.filter(
                            (el) => el !== query
                          );
                          setRequest({
                            ...request,
                            query: newquery,
                          });
                        }}
                      >
                        <img
                          src={close}
                          alt="question"
                          width="15"
                          height="15"
                        />
                      </button>
                    ) : null}
                  </div>
                );
              })}
            </div>
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
