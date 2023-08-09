export default function FifthStep() {
  return (
    <p>
      In the second part, you can fill in the information that you will send in
      your request. <br />
      You can add a body except with the GET method where the fields are
      disabled. You can also add params and query. <br />
      For the body, params and query, the form works with key/value fields. You
      can add new fields with the Add button or remove existing ones with the
      cross button.
      <br />
      With the example, we have no body because we use get method. We have 2
      params (category and color) and 1 query (limit).
    </p>
  );
}
