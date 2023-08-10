import { tutorial } from "../../data";

export default function FifthStep({ lang }) {
  const english = lang === "en";
  return (
    <>
      <h3>
        {english ? tutorial.en.fifthStep.title : tutorial.fr.fifthStep.title}
      </h3>
      <br />
      <p>
        {english
          ? tutorial.en.fifthStep.firstContent
          : tutorial.fr.fifthStep.firstContent}
      </p>
      <br />
      <p>
        {english
          ? tutorial.en.fifthStep.secondContent
          : tutorial.fr.fifthStep.secondContent}
      </p>
      <br />
      <p>
        {english
          ? tutorial.en.fifthStep.example
          : tutorial.fr.fifthStep.example}
      </p>
    </>
  );
}
