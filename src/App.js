import React from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  return <div className="text-3xl font-bold underline">hello!!</div>;
};

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
