import React from "react";

const ComplexTypes: React.FC = () => {
  /* eslint-disable @typescript-eslint/no-unused-vars */
  const tuple: [string, number] = ["thefrugaldev", 21]; // Note: tuples allow multi-type arrays in Typescript
  enum enumValue {
    first = 1,
    second = 2,
  }
  const anyTypeValue: any = "Clayton"; // Note: use type any sparingly
  const warning = (): void => {
    // Note: void typically used as return type for functions
    console.log("Warning");
  };
  /* eslint-enable @typescript-eslint/no-unused-vars */

  return <div>This component is used to demonstrate complex types!</div>;
};

export default ComplexTypes;
