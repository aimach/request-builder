import { useEffect, useState, useContext } from "react";
import PropTypes from "prop-types";
import "../../assets/styles/common.css";
import "./form.css";
import "../tutorial/tutorial.css";
import { LanguageContext } from "../../context/languageContext";
import Result from "../result/Result";
import InputKeyValue from "./inputKeyValue";
import InputText from "./InputText";
import SelectMethod from "./SelectMethod";
import translation from "../../translation/translation";
import { initialRequest, tutorialRequest } from "./formData";

export default function Form({
  setShowHelpModal,
  setModalContent,
  step,
  showTutorial,
}) {
  const { language } = useContext(LanguageContext);
  const [request, setRequest] = useState(initialRequest);
  const [errors, setErrors] = useState({
    host: false,
    port: false,
    endpoint: false,
  });

  // IF TUTORIAL USE EXAMPLE REQUEST
  useEffect(() => {
    showTutorial ? setRequest(tutorialRequest) : setRequest(initialRequest);
  }, [showTutorial]);

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
            {translation[language].clear}
          </button>
          <div
            className={`builder-form flex-column ${
              step === 4 ? `tuto-style` : ""
            }`}
          >
            <InputText
              setShowHelpModal={setShowHelpModal}
              setModalContent={setModalContent}
              setRequest={setRequest}
              request={request}
              errors={errors}
              setErrors={setErrors}
              name={"host"}
            />
            <InputText
              setShowHelpModal={setShowHelpModal}
              setModalContent={setModalContent}
              setRequest={setRequest}
              request={request}
              errors={errors}
              setErrors={setErrors}
              name={"port"}
            />
            <SelectMethod
              setShowHelpModal={setShowHelpModal}
              setModalContent={setModalContent}
              setRequest={setRequest}
              request={request}
              errors={errors}
              name={"method"}
            />
            <InputText
              setShowHelpModal={setShowHelpModal}
              setModalContent={setModalContent}
              setRequest={setRequest}
              request={request}
              errors={errors}
              setErrors={setErrors}
              name={"endpoint"}
            />
          </div>
          <div
            className={`builder-form flex-column ${
              step === 5 ? `tuto-style` : ""
            }`}
          >
            <InputKeyValue
              setShowHelpModal={setShowHelpModal}
              setModalContent={setModalContent}
              setRequest={setRequest}
              request={request}
              name={"body"}
            />
            <InputKeyValue
              setShowHelpModal={setShowHelpModal}
              setModalContent={setModalContent}
              setRequest={setRequest}
              request={request}
              name={"params"}
            />
            <InputKeyValue
              setShowHelpModal={setShowHelpModal}
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
  setShowHelpModal: PropTypes.func,
  setModalContent: PropTypes.func,
  step: PropTypes.number,
  showTutorial: PropTypes.bool,
};
