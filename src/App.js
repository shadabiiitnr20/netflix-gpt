import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";

const App = () => {
  return (
    <>
      <Body />
    </>
  );
};

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
