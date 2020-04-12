import React from "react";

const BasicTypes: React.FC = () => {
  let firstValue: string = "Clayton";
  let secondValue: number = 21;
  let thirdValue: boolean = true;
  let fourthValue: number[] = [1, 2, 3, 4, 5]; //Note: Arrays in typescript are of type object
  let fifthValue: Array<string> = ["the", "frugal", "dev"];

  return (
    <div>
      <p>
        The value {firstValue} is of type {typeof firstValue}!
      </p>
      <p>
        The value {secondValue} is of type {typeof secondValue}!
      </p>
      <p>
        The value {thirdValue} is of type {typeof thirdValue}!
      </p>
      <p>
        The value {fourthValue} is of type {typeof fourthValue}!
      </p>
      <p>
        The value {fifthValue} is of type {typeof fifthValue}!
      </p>
    </div>
  );
};

export default BasicTypes;
