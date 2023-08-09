import { useEffect, useState } from "react";
import "./App.css";
import "./tutorial.css";

import Result from "./Result";
import question from "./assets/question.png";
import close from "./assets/close.png";
import { translation } from "./data";

function Form({ lang, setShowModal, setModalContent, step, showTutorial }) {
  const english = lang === "en";

  const initialRequest = {
    host: "localhost",
    port: 5000,
    method: "get",
    endpoint: "",
    params: [{ key: "", value: "" }],
    query: [{ key: "", value: "" }],
    body: [{ key: "", value: "" }],
  };

  useEffect(() => {
    showTutorial
      ? setRequest({
          host: "localhost",
          port: 5000,
          method: "get",
          endpoint: "/api/clothes",
          params: [
            { key: "category", value: "shoes" },
            { key: "color", value: "red" },
          ],
          query: [{ key: "limit", value: "10" }],
          body: [{ key: "", value: "" }],
        })
      : setRequest(initialRequest);
  }, [showTutorial]);

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

  const regex = {
    host: /^[ A-Za-z0-9_@./#&+-]*$/g,
    port: /^((6553[0-5])|(655[0-2][0-9])|(65[0-4][0-9]{2})|(6[0-4][0-9]{3})|([1-5][0-9]{4})|([0-5]{0,5})|([0-9]{1,4}))$/g,
    method: /^(get|post|put|delete)$/g,
    key: /^[a-zA-z_]+[a-zA-z0-9]*/g,
  };

  const verifyData = (e, dataType) => {
    if (e.target.value.match(dataType) || e.target.value == "") {
      setRequest({ ...request, [e.target.name]: e.target.value });
      setErrors({ ...errors, [e.target.name]: false });
    } else {
      setErrors({ ...errors, [e.target.name]: true });
    }
  };

  return (
    <div className="flex builder-container">
      <div>
        <form
          className={`flex-column builder-form ${
            step === 3 ? `tutoStyle` : ""
          }`}
        >
          <button
            type="button"
            className="button-help"
            onClick={() => setRequest(initialRequest)}
          >
            {english ? translation.en.clear : translation.fr.clear}
          </button>
          <div className={step === 4 ? `tutoStyle` : ""}>
            <div className="flex">
              <label className="label-title">
                {english ? translation.en.host : translation.fr.host}
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
            <input
              type="text"
              name="host"
              placeholder="localhost"
              value={request.host}
              onChange={(e) => verifyData(e, regex.host)}
            />
            {errors.host ? (
              <p>Uniquement des caractères alphanumeriques</p>
            ) : null}
            <div className="flex">
              <label className="label-title">
                {english ? translation.en.port : translation.fr.port}
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
            <input
              type="text"
              name="port"
              placeholder="5000"
              value={request.port}
              onChange={(e) => verifyData(e, regex.port)}
            />
            {errors.port ? <p>Uniquement des caractères numériques</p> : null}

            <div className="flex">
              <label className="label-title">
                {english ? translation.en.method : translation.fr.method}
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
              <p>Uniquement les méthodes GET, POST, PUT et DELETE</p>
            ) : null}
            <div className="flex">
              <label className="label-title">
                {english ? translation.en.endpoint : translation.fr.endpoint}
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
            <input
              type="text"
              name="endpoint"
              value={request.endpoint}
              onChange={(e) =>
                setRequest({ ...request, endpoint: e.target.value })
              }
            />
          </div>
          <div className={step === 5 ? `tutoStyle` : ""}>
            <div className="flex input-with-add">
              <div>
                <label className="label-title">
                  {english ? translation.en.body : translation.fr.body}
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
                  className="button-add"
                >
                  {english ? translation.en.add : translation.fr.add}
                </button>
              )}
            </div>
            <div className="flex-column">
              {request.body.map((element, index) => {
                return (
                  <div key={index} className="key-value-container">
                    {english ? translation.en.key : translation.fr.key}
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
                    {english ? translation.en.value : translation.fr.value}
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
                  {english ? translation.en.params : translation.fr.params}
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
                className="button-add"
              >
                {english ? translation.en.add : translation.fr.add}
              </button>
            </div>
            <div className="flex-column">
              {request.params.map((param, index) => {
                return (
                  <div key={index} className="key-value-container">
                    {english ? translation.en.key : translation.fr.key}
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
                    {english ? translation.en.value : translation.fr.value}
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
                  {english ? translation.en.query : translation.fr.query}
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
                className="button-add"
              >
                {english ? translation.en.add : translation.fr.add}
              </button>
            </div>
            <div className="flex-column">
              {request.query.map((query, index) => {
                return (
                  <div key={index} className="key-value-container">
                    {english ? translation.en.key : translation.fr.key}
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
                    {english ? translation.en.value : translation.fr.value}
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
      <Result request={request} lang={lang} step={step} />
    </div>
  );
}

export default Form;
