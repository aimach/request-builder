import { tutorial } from "../../data";

export default function SeventhStep({ lang }) {
  const english = lang === "en";
  return (
    <>
      <h3>
        {english
          ? tutorial.en.seventhStep.title
          : tutorial.fr.seventhStep.title}
      </h3>
      <br />
      <p>
        {english
          ? tutorial.en.seventhStep.firstContent
          : tutorial.fr.seventhStep.firstContent}
      </p>
      <br />
      <p>
        {english
          ? tutorial.en.seventhStep.example
          : tutorial.fr.seventhStep.example}
      </p>
    </>
  );
}
