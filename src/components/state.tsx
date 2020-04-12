import React from "react";

const initialState = {
  name: "Clayton",
  message: "TypeScript is cool!!",
};

type State = Readonly<typeof initialState>;

class StateComponent extends React.Component<any, State> {
  readonly state: State = initialState;

  render() {
    return (
      <div>
        <p>
          {this.state.name}, {this.state.message}
        </p>
      </div>
    );
  }
}

export default StateComponent;
