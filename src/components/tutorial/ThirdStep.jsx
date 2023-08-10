import { tutorial } from "../../data";

export default function ThirdStep() {
  return (
    <>
      <h3>{tutorial.fr.thirdStep.title}</h3>
      <br />
      <p>{tutorial.fr.thirdStep.firstContent}</p>
      <br />
      <p>{tutorial.fr.thirdStep.example}</p>
    </>
  );
}
