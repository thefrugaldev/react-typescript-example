import React from "react";

const BasicTypes: React.FC = () => {
  const stringValue: string = "Clayton";
  const numberValue: number = 21;
  const boolValue: boolean = true;
  const numberArrayValue: number[] = [1, 2, 3, 4, 5]; //Note: Arrays in typescript are of type object
  const stringArrayValue: Array<string> = ["the", "frugal", "dev"];

  return (
    <div>
      <p>
        The value {stringValue} is of type {typeof stringValue}!
      </p>
      <p>
        The value {numberValue} is of type {typeof numberValue}!
      </p>
      <p>
        The value {boolValue} is of type {typeof boolValue}!
      </p>
      <p>
        The value {numberArrayValue} is of type {typeof numberArrayValue}!
      </p>
      <p>
        The value {stringArrayValue} is of type {typeof stringArrayValue}!
      </p>
    </div>
  );
};

export default BasicTypes;
