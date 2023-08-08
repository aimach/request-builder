import { translation } from "./data";
import logo from "./assets/logo.svg";
import title from "./assets/title.png";

export default function Header({ lang, setLang }) {
  const english = lang === "en";

  return (
    <header>
      <div className="flex title-bar">
        <div>
          <img src={logo} alt="logo" className="logo" />
          <img src={title} alt="title" className="title" />
        </div>
        <div>
          <button
            type="button"
            onClick={() => setLang("en")}
            className={english ? "lang-active" : ""}
          >
            EN
          </button>
          <button
            type="button"
            onClick={() => setLang("fr")}
            className={english ? "" : "lang-active"}
          >
            FR
          </button>
        </div>
      </div>
      <p className="introduction">
        {english ? translation.en.intro : translation.fr.intro}
      </p>
    </header>
  );
}
