import React from "react";
import ReactDOM from "react-dom";
import Main from "./src/Main";

function App() {
  return <Main />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
