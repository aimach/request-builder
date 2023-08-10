import { tutorial } from "../../data";

export default function FourthStep({ lang }) {
  const english = lang === "en";
  return (
    <>
      <h3>
        {english ? tutorial.en.fourthStep.title : tutorial.fr.fourthStep.title}
      </h3>
      <br />
      <p>
        {english
          ? tutorial.en.fourthStep.firstContent
          : tutorial.fr.fourthStep.firstContent}
      </p>
      <br />
      <p>
        {english
          ? tutorial.en.fourthStep.example
          : tutorial.fr.fourthStep.example}
      </p>
    </>
  );
}
