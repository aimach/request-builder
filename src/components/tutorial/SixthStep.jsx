import { tutorial } from "../../data";

export default function SixthStep({ lang }) {
  const english = lang === "en";
  return (
    <>
      <h3>
        {english ? tutorial.en.sixthStep.title : tutorial.fr.sixthStep.title}
      </h3>
      <br />
      <p>
        {english
          ? tutorial.en.sixthStep.firstContent
          : tutorial.fr.sixthStep.firstContent}
      </p>
    </>
  );
}
