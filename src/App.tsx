import React from "react";
import logo from "./logo.svg";
import "./App.css";
//Components
import BasicTypes from "./components/basic-types";
import ComplexTypes from "./components/complex-types";
import StatelessComponent from "./components/stateless-component";
import ClassComponent from "./components/class-component";
import Interface from "./components/interface";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <BasicTypes />
        <ComplexTypes />
        <StatelessComponent message="This is a simple message" />
        <ClassComponent />
        <Interface name="Clayton" message="This is a simple message" />
      </header>
    </div>
  );
}

export default App;
