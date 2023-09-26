import { useState, useContext } from "react";
import PropTypes from "prop-types";
import "../../assets/styles/common.css";
import "./result.css";
import "../tutorial/tutorial.css";
import translation from "../../translation/translation";
import { LanguageContext } from "../../context/languageContext";
import { regex } from "../form/formData";

export default function Result({ request, step }) {
  const { host, port, method, endpoint, body, params, query } = request;
  const { language } = useContext(LanguageContext);

  // create params string
  const paramsStringBack = params
    .filter((param) => param.key !== "")
    .map((param) => `/:${param.key}`)
    .join("");
  const paramsStringFront = params
    .filter((param) => param.value !== "")
    .map((param) => `/${param.value}`)
    .join("");

  console.log({ endpoint });

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
      <div className={`${step === 6 ? `tuto-style` : ""} `}>
        <div className={`flex-column ${step === 7 ? `tuto-style` : ""} `}>
          <h3>{translation[language].client}</h3>
          <h5>{translation[language].clientIntro}</h5>
          <div className="flex result-container">
            <span className="method-style">{method}</span>
            <p>
              http://
              {host}
              {port === "" ? "" : `:${port}`}
              <span
                onMouseEnter={() => setActiveEndpoint(true)}
                onMouseLeave={() => setActiveEndpoint(false)}
                className={activeEndpoint ? "active-endpoint" : ""}
              >
                {endpoint[0] === "/" || endpoint[0] === undefined
                  ? endpoint
                  : `/${endpoint}`}
              </span>
              <span
                onMouseEnter={() => setActiveParams(true)}
                onMouseLeave={() => setActiveParams(false)}
                className={activeParams ? "active-params" : ""}
              >
                {paramsStringFront}
              </span>
              <span
                onMouseEnter={() => setActiveQuery(true)}
                onMouseLeave={() => setActiveQuery(false)}
                className={activeQuery ? "active-query" : ""}
              >
                {queryStringFront}
              </span>
            </p>
          </div>
          <h5>{translation[language].clientTitle}</h5>
          {method !== "get" ? (
            body[0].key !== "" ? (
              <pre>
                &#123;
                {body
                  .filter((el) => el.key !== "")
                  .map((el, index) => {
                    return (
                      <p key={index}>
                        {"    "}
                        {el.key} :{" "}
                        {parseInt(el.value) ||
                        el.value === "true" ||
                        el.value === "false"
                          ? `${el.value}`
                          : `"${el.value}"`}
                      </p>
                    );
                  })}
                &#125;
              </pre>
            ) : (
              <div>&#123;&#125;</div>
            )
          ) : (
            <div>{translation[language].noBody}</div>
          )}
        </div>
        <div className={`flex-column ${step === 8 ? `tuto-style` : ""} `}>
          <h3>{translation[language].server}</h3>
          <h5>{translation[language].serverIntro}</h5>
          <div className="flex result-container">
            <span className="method-style">{method}</span>
            <p>
              &quot;
              <span
                onMouseEnter={() => setActiveEndpoint(true)}
                onMouseLeave={() => setActiveEndpoint(false)}
                className={activeEndpoint ? "active-endpoint" : ""}
              >
                {endpoint[0] === "/" || endpoint[0] === undefined
                  ? endpoint
                  : `/${endpoint}`}
              </span>
              <span
                onMouseEnter={() => setActiveParams(true)}
                onMouseLeave={() => setActiveParams(false)}
                className={activeParams ? "active-params" : ""}
              >
                {paramsStringBack}
              </span>
              <span>
                {endpoint === "" && paramsStringBack === "" ? "/" : ""}
              </span>
              &quot;
            </p>
          </div>
          <div className={activeParams ? "active-params" : ""}>
            <h5>{translation[language].backParams}</h5>
            {params[0].key !== "" ? (
              <pre>
                &#123;
                {params
                  .filter((params) => params.key !== "")
                  .map((el, index) => (
                    <p key={index}>
                      {"    "}
                      {el.key} :{" "}
                      {el.value.match(regex.onlyNumber) ||
                      el.value === "true" ||
                      el.value === "false"
                        ? `${el.value}`
                        : `"${el.value}"`}
                    </p>
                  ))}
                &#125;
              </pre>
            ) : (
              <div>&#123;&#125;</div>
            )}
          </div>
          <div className={activeQuery ? "active-query" : ""}>
            <h5>{translation[language].backQuery}</h5>
            {query[0].key !== "" ? (
              <pre>
                &#123;
                {query
                  .filter((query) => query.key !== "")
                  .map((el, index) => (
                    <p key={index}>
                      {"    "}
                      {el.key} :{" "}
                      {el.value.match(regex.onlyNumber) ||
                      el.value === "true" ||
                      el.value === "false"
                        ? `${el.value}`
                        : `"${el.value}"`}
                    </p>
                  ))}
                &#125;
              </pre>
            ) : (
              <div>&#123;&#125;</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

Result.propTypes = {
  request: PropTypes.object,
  step: PropTypes.number,
};
