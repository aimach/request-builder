import { useState } from "react";
import "./App.css";
import Modal from "./Modal";
import Form from "./Form";
import Header from "./Header";
import Footer from "./Footer";
import Tutorial from "./Tutorial";

function App() {
  // LANGUAGE STATE
  const [lang, setLang] = useState("en");

  // MODAL STATES
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState();

  // TUTORIAL STATES
  const [showTutorial, setShowTutorial] = useState(false);
  const [step, setStep] = useState(0);

  return (
    <>
      {showModal && (
        <Modal
          setShowModal={setShowModal}
          modalContent={modalContent}
          lang={lang}
        />
      )}
      {showTutorial && (
        <Tutorial
          lang={lang}
          setShowTutorial={setShowTutorial}
          setStep={setStep}
          step={step}
        />
      )}
      <Header
        lang={lang}
        setLang={setLang}
        setShowTutorial={setShowTutorial}
        setStep={setStep}
        step={step}
      />
      <Form
        lang={lang}
        setShowModal={setShowModal}
        setModalContent={setModalContent}
        step={step}
        showTutorial={showTutorial}
      />
      <Footer lang={lang} />
    </>
  );
}

export default App;
