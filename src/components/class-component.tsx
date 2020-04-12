import React, { Component } from "react";

class ClassComponent extends Component<any> {
  componentWillMount() {
    console.log("Almost there...");
  }

  componentDidMount() {
    console.log("Finally...hello!");
  }

  render() {
    return <div>This is used to demonstrate class/stateful components!</div>;
  }
}

export default ClassComponent;
