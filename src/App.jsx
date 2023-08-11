import { useState } from "react";
import Modal from "./components/help/Modal";
import Form from "./components/form/Form";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Tutorial from "./components/tutorial/Tutorial";
import "./assets/styles/common.css";
import "./App.css";
import { LanguageProvider } from "./context/languageContext";
function App() {
  // MODAL STATES
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState();

  // TUTORIAL STATES
  const [showTutorial, setShowTutorial] = useState(false);
  const [step, setStep] = useState(0);

  return (
    <LanguageProvider>
      {showModal && (
        <Modal setShowModal={setShowModal} modalContent={modalContent} />
      )}
      {showTutorial && (
        <Tutorial
          setShowTutorial={setShowTutorial}
          setStep={setStep}
          step={step}
        />
      )}
      <Header setShowTutorial={setShowTutorial} setStep={setStep} step={step} />
      <Form
        setShowModal={setShowModal}
        setModalContent={setModalContent}
        step={step}
        showTutorial={showTutorial}
      />
      <Footer />
    </LanguageProvider>
  );
}

export default App;
