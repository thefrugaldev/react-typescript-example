import React from "react";
import logo from "./logo.svg";
import "./App.css";
//Components
import BasicTypes from "./components/basic-types";
import ComplexTypes from "./components/complex-types";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <BasicTypes />
        <ComplexTypes />
      </header>
    </div>
  );
}

export default App;
