import { tutorial } from "../../data";

export default function ThirdStep({ lang }) {
  const english = lang === "en";
  return (
    <>
      <h3>
        {english ? tutorial.en.thirdStep.title : tutorial.fr.thirdStep.title}
      </h3>
      <br />
      <p>
        {english
          ? tutorial.en.thirdStep.firstContent
          : tutorial.fr.thirdStep.firstContent}
      </p>
      <br />
      <p>
        {english
          ? tutorial.en.thirdStep.example
          : tutorial.fr.thirdStep.example}
      </p>
    </>
  );
}
