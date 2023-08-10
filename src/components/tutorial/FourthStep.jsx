import { tutorial } from "../../data";

export default function FourthStep() {
  return (
    <>
      <h3>{tutorial.fr.fourthStep.title}</h3>
      <br />
      <p>{tutorial.fr.fourthStep.firstContent}</p>
      <br />
      <p>{tutorial.fr.fourthStep.example}</p>
    </>
  );
}
