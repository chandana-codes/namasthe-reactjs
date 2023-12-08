import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", {id: "heading"}, "Namaste React");
// console.log(heading);

// React Functional Component
const HeadingComponent = () => {
  return <h1>Namaste React Functional Component</h1>;
};

//React Element
const heading = (
  <h1 className="head" tabIndex="5">
    Namaste React Using JSX
  </h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
