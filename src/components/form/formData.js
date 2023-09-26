export const initialRequest = {
  host: "localhost",
  port: 5000,
  method: "get",
  endpoint: "",
  params: [{ key: "", value: "" }],
  query: [{ key: "", value: "" }],
  body: [{ key: "", value: "" }],
};

export const tutorialRequest = {
  host: "localhost",
  port: 5000,
  method: "get",
  endpoint: "/api/movies",
  params: [{ key: "type", value: "western" }],
  query: [
    { key: "color", value: "false" },
    { key: "limit", value: "10" },
  ],
  body: [{ key: "", value: "" }],
};

export const regex = {
  host: /^[ A-Za-z0-9_@./#&+-]*$/g,
  port: /^((6553[0-5])|(655[0-2][0-9])|(65[0-4][0-9]{2})|(6[0-4][0-9]{3})|([1-5][0-9]{4})|([0-5]{0,5})|([0-9]{1,4}))$/g,
  method: /^(get|post|put|delete)$/g,
  endpoint: /^[ A-Za-z0-9_@./#&+-]*$/g,
  key: /^[a-zA-z_]+[a-zA-z0-9]*/g,
  onlyNumber: /^\d+$/,
};
