import { tutorial } from "../../data";

export default function SecondStep({ lang }) {
  const english = lang === "en";
  return (
    <>
      <h3>
        {english ? tutorial.en.secondStep.title : tutorial.fr.secondStep.title}
      </h3>
      <br />
      <p>
        {english
          ? tutorial.en.secondStep.firstContent
          : tutorial.fr.secondStep.firstContent}
      </p>
    </>
  );
}
