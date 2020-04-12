import React from "react";

interface Interface {
  //Note: interfaces are only used by the compiler to validate types
  name: string;
  message: string;
}

const Interface: React.FC<Interface> = ({ name, message }): any => {
  return (
    <div>
      <p>
        {name}, {message}
      </p>
    </div>
  );
};

export default Interface;
