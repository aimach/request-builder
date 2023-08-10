import { tutorial } from "../../data";

export default function HeightStep() {
  return (
    <>
      <h3>{tutorial.fr.heigthStep.title}</h3>
      <br />
      <p>{tutorial.fr.heigthStep.firstContent}</p>
      <br />
      <p>{tutorial.fr.heigthStep.secondContent}</p>
    </>
  );
}
