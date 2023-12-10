const nestedElement = React.createElement(
  "div",
  { id: "parent1" },
  React.createElement("div", { id: "parent2" }, [
    React.createElement("h1", {}, "Hello World!"),
    React.createElement("h1", {}, "I am Chandana"),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(nestedElement);
