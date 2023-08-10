import { tutorial } from "../../data";

export default function FifthStep() {
  return (
    <>
      <h3>{tutorial.fr.fifthStep.title}</h3>
      <br />
      <p>{tutorial.fr.fifthStep.firstContent}</p>
      <br />
      <p>{tutorial.fr.fifthStep.secondContent}</p>
      <br />
      <p>{tutorial.fr.fifthStep.example}</p>
    </>
  );
}
