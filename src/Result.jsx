import "./App.css";
import { translation } from "./data";
import { useState } from "react";

/* eslint-disable react/prop-types */
export default function Result({ request, lang }) {
  const { host, port, method, endpoint, body, params, query } = request;
  const english = lang === "en";

  // create params string
  const paramsStringBack = params
    .filter((param) => param.key !== "")
    .map((param) => `/:${param.key}`)
    .join("");
  const paramsStringFront = params
    .filter((param) => param.value !== "")
    .map((param) => `/${param.value}`)
    .join("");

  // create query string
  let queryStringFront = "";
  if (query[0].key !== "") {
    queryStringFront += "?";
    queryStringFront += query
      .filter((query) => query.key !== "")
      .map((query) => `${query.key}=${query.value}`)
      .join("&");
  }

  // states
  const [activeEndpoint, setActiveEndpoint] = useState(false);
  const [activeParams, setActiveParams] = useState(false);
  const [activeQuery, setActiveQuery] = useState(false);

  return (
    <div className="flex-column result">
      <div className="flex-column">
        <h3>Client</h3>
        <h5>
          {english ? translation.en.frontIntro : translation.fr.frontIntro}
        </h5>
        <div className="flex result-container">
          <span className="methodStyle">{method}</span>
          <p>
            http://
            {host}:{port}
            <span
              onMouseEnter={() => setActiveEndpoint(true)}
              onMouseLeave={() => setActiveEndpoint(false)}
              className={activeEndpoint ? "activeEndpoint" : ""}
            >
              {endpoint}
            </span>
            <span
              onMouseEnter={() => setActiveParams(true)}
              onMouseLeave={() => setActiveParams(false)}
              className={activeParams ? "activeParams" : ""}
            >
              {paramsStringFront}
            </span>
            <span
              onMouseEnter={() => setActiveQuery(true)}
              onMouseLeave={() => setActiveQuery(false)}
              className={activeQuery ? "activeQuery" : ""}
            >
              {queryStringFront}
            </span>
          </p>
        </div>
        <h5>
          {english
            ? translation.en.frontScndTitle
            : translation.fr.frontScndTitle}
        </h5>
        {method !== "get" ? (
          body[0].key !== "" ? (
            <pre>
              &#123;
              {body.map((el, index) => {
                return (
                  <p key={index}>
                    {"    "}
                    {el.key} : {el.value}
                  </p>
                );
              })}
              &#125;
            </pre>
          ) : (
            <div>&#123;&#125;</div>
          )
        ) : (
          <div> {english ? translation.en.noBody : translation.fr.noBody}</div>
        )}
      </div>
      <div className="flex-column ">
        <h3>Server</h3>
        <h5>{english ? translation.en.backIntro : translation.fr.backIntro}</h5>
        <div className="flex result-container">
          <span className="methodStyle">{method}</span>
          <p>
            <span
              onMouseEnter={() => setActiveEndpoint(true)}
              onMouseLeave={() => setActiveEndpoint(false)}
              className={activeEndpoint ? "activeEndpoint" : ""}
            >
              {endpoint}
            </span>
            <span
              onMouseEnter={() => setActiveParams(true)}
              onMouseLeave={() => setActiveParams(false)}
              className={activeParams ? "activeParams" : ""}
            >
              {paramsStringBack}
            </span>
          </p>
        </div>
        <div className={activeParams ? "activeParams" : ""}>
          <h5>
            {english ? translation.en.backParams : translation.fr.backParams}
          </h5>
          {params[0].key !== "" ? (
            <pre>
              &#123;
              {params
                .filter((params) => params.key !== "")
                .map((el, index) => {
                  return (
                    <p key={index}>
                      {"    "}
                      {el.key} : {el.value}
                    </p>
                  );
                })}
              &#125;
            </pre>
          ) : (
            <div>&#123;&#125;</div>
          )}
        </div>
        <div className={activeQuery ? "activeQuery" : ""}>
          <h5>
            {english ? translation.en.backQuery : translation.fr.backQuery}
          </h5>
          {query[0].key !== "" ? (
            <pre>
              &#123;
              {query
                .filter((query) => query.key !== "")
                .map((el, index) => {
                  return (
                    <p key={index}>
                      {"    "}
                      {el.key} : {el.value}
                    </p>
                  );
                })}
              &#125;
            </pre>
          ) : (
            <div>&#123;&#125;</div>
          )}
        </div>
      </div>
    </div>
  );
}
