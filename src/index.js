import "./styles/index.scss";

const userState = {
  language: "JS",
  framework: "React",
};

const user = {
  name: "Yerkebulan",
  age: 23,
  ...userState,
};

console.log(user);
